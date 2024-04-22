import {createContext, useContext, useReducer} from 'react';

export const CalcContext = createContext(null);
export const CalcDispatchContext = createContext(null);

const initialCalc = [];

export function CalcProvider({children}) {
	const [calc, dispatch] = useReducer(
		calcReducer,
		initialCalc,
	);
	return (<CalcContext.Provider value={calc}>
			<CalcDispatchContext.Provider value={dispatch}>
				{children}
			</CalcDispatchContext.Provider>
		</CalcContext.Provider>

	);
}

export function useCalc() {
	return useContext(CalcContext);
}

export function useCalcDispatch() {
	return useContext(CalcDispatchContext);
}

function calcReducer(calc = [], action) {
	// ok
	switch (action.type) {
		case 'add-number': {
			const prevItem = calc[calc.length - 1];
			let currentItem;
			const operators = ['÷', '×', '+', '–', '%'];

			if (typeof prevItem === 'number') {
				currentItem = Number(`${prevItem}${action.number}`);
			} else if (operators.includes(prevItem)) {
				return [...calc, action.number];
			} else if (typeof prevItem === 'string' && prevItem.endsWith('.')) {
				currentItem = `${prevItem}${action.number}`;
			} else {
				currentItem = action.number;
			}

			if (calc.length > 0 && typeof calc[calc.length - 1] === 'string' && calc[calc.length - 1].endsWith('%')) {
				return calc;
			} else if (calc.length > 0 || typeof prevItem === 'number') {
				return [...calc.slice(0, -1), currentItem];
			} else {
				return [...calc, action.number];
			}
		}




		//ok
		case 'add-dot': {
			const prevItem = calc[calc.length - 1];
			if (typeof prevItem === 'number') {
				return [...calc.slice(0, -1), `${prevItem}.`];
			} else if (calc.length < 1) {
				return ['0.'];
			} else {
				return calc;
			}
		}


		//ok
		case 'delete-last-item' : {
			return [...calc.slice(0, -1)];
		}
		//ok
		case 'add-operator' : {
			if ((action.operator === '÷' ||
				action.operator === '×' ||
				action.operator === '+' ||
				action.operator === '–') && calc.length < 1) {
				return calc;
			} else if (['÷', '×', '+', '–'].includes(calc[calc.length - 1])) {
				return calc;
			} else return [...calc, action.operator];
		}
		//ok
		case 'total': {
			const replacePercentage = (arr) => {
				let result = [];
				let prevIsPercent = false;

				for (let i = 0; i < arr.length; i++) {
					const item = arr[i];

					if (typeof item === 'string' && item.endsWith('%')) {
						const number = parseFloat(item.slice(0, -1));
						if (!isNaN(number)) {
							if (prevIsPercent) {
								result[result.length - 1] *= 1 + number / 100;
							} else {
								const prevItem = result[result.length - 1];
								if (typeof prevItem === 'number') {
									result[result.length - 1] -= prevItem * (number / 100);
								} else {
									result.push(number / 100);
								}
							}
						}
						prevIsPercent = true;
					} else if (!isNaN(parseFloat(item))) {
						result.push(parseFloat(item));
						prevIsPercent = false;
					} else if (['+', '-', '*', '/'].includes(item)) {
						result.push(item);
						prevIsPercent = false;
					}
				}

				return result;
			};

			const replaceOperators = (arr) => {
				const operatorsMap = {
					'÷': '/',
					'×': '*',
					'–': '-',
					'+': '+',
				};

				return arr.map(item => operatorsMap[item] || item);
			};

			const calculateArray = (arr) => {
				let result = parseFloat(arr[0]);
				let currentOperator = null;

				for (let i = 1; i < arr.length; i++) {
					const item = arr[i];
					if (typeof item === 'number') {
						if (currentOperator) {
							switch (currentOperator) {
								case '+':
									result += item;
									break;
								case '-':
									result -= item;
									break;
								case '*':
									result *= item;
									break;
								case '/':
									result /= item;
									break;
							}
							currentOperator = null;
						}
					} else {
						currentOperator = item;
					}
				}

				return result;
			};

			const expression = calc.map(item => {
				switch (item) {
					case '÷':
						return '/';
					case '×':
						return '*';
					case '–':
						return '-';
					default:
						return item;
				}
			});

			const replacedOperators = replaceOperators(expression);
			const replacedPercentage = replacePercentage(replacedOperators);

			try {
				const total = calculateArray(replacedPercentage);
				return isNaN(total) ? ['Invalid calculation result'] : [total.toFixed(total % 1 === 0 ? 0 : 2)];
			} catch (error) {
				console.error('Error in calculation:', error);
				return ['Invalid calculation result'];
			}
		}



//ok
		case 'clear' : {
			return [calc] = [];
		}


//ok
		case 'percent': {
			const operatorsAndPercent = ['÷', '×', '+', '–', '%'];
			const lastItem = calc[calc.length - 1];
			if (typeof lastItem === 'string' && lastItem.includes('%')) {
				return calc;
			}
			if (!operatorsAndPercent.includes(lastItem)) {
				return [...calc.slice(0, -1), lastItem + '%'];
			} else {
				return calc;
			}
		}

		//ok
		case 'change-sign' : {
			const lastItem = calc[calc.length - 1];
			if (typeof lastItem === 'string' && lastItem.includes('%')) {
				const percentage = parseFloat(lastItem);
				return [...calc.slice(0, -1), (percentage * -1) + '%'];
			} else {
				return calc;
			}
		}


		default: {
			return calc;
		}
	}
}
