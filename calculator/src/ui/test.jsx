case 'add-dot': {
	const lastItem = calc[calc-1]
	if (calc.length < 1) {
		return ['0.'];
	} else if (calc.includes('.') || calc.includes('0.')) {
		return calc;
	} else return [...calc, action.dot];
}
//ok
case 'delete-last-item' : {
	return [...calc.slice(0, -1)];
}