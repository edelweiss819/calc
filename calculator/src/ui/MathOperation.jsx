import React from 'react';
import Button from './Button';
import styles from './MathOperation.module.css';
import {useCalcDispatch} from '../module/CalcContext';

function MathOperation(props) {
	const mathOperation = ['÷', '×', '–', '+'];
	const dispatch = useCalcDispatch();

	const handleOperator = (operator) => {
		dispatch({
			type: 'add-operator',
			operator: operator,
		});
	};
	const handleTotal = () => {
		dispatch({
			type: 'total',
		});
	};

	return (
		<div className={styles.mathOperationGrid}>
			{mathOperation.map((operator) => {
				return (
					<Button
						key={operator}
						children={operator}
						onClick={() => handleOperator(operator)}
						style={{
							backgroundColor: `var(--blue)`,
							...(operator === '÷' && {gridArea: '1 / 1 / 2 / 2'}),
							...(operator === '×' && {gridArea: '2 / 1 / 3 / 2'}),
							...(operator === '–' && {gridArea: '3 / 1 / 4 / 2'}),
							...(operator === '+' && {gridArea: '4 / 1 / 5 / 2'}),
							...(operator === '=' && {gridArea: '5 / 1 / 6 / 2'}),
						}}
					/>
				);
			})}
			<Button key={'='}
					onClick={handleTotal}
					style={{
						backgroundColor: `var(--blue)`,
						gridArea: '5 / 1 / 6 / 2',
					}}>=
			</Button>
		</div>
	);
}

export default MathOperation;
