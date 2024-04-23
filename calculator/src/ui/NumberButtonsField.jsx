import React from 'react';
import Button from './Button.jsx';
import styles from './NumberButtonsField.module.css';
import {useCalcDispatch} from '../module/CalcContext';
import DeleteIcon from '../assets/svg/DeleteIcon';
import {useTheme, useThemeDispatch} from '../module/ThemeContext';
import DeleteIconDark from '../assets/svg/DeleteIconDark';

function NumberButtonsField(props) {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	const dispatch = useCalcDispatch();
	const theme = useTheme();
	const themeDispatch = useThemeDispatch();
	const themeBackground = theme === 'dark' ? `var(--dark)` : `var(--white)`;
	const themeColor = theme === `dark` ? `var(--white)` : `var(--black)`;

	const handleNumbersClick = (number) => {
		dispatch({
			type: 'add-number',
			number: number,
		});
	};

	const handleDotClick = () => {
		const dot = '.';
		dispatch({
			type: 'add-dot',
			dot: dot,
		});
	};

	const handleDeleteLastValue = () => {
		dispatch({
			type: 'delete-last-item',
		});
	};


	return (
		<div className={styles.numberButtonsFieldGrid}>
			{numbers.map((number) => (
				<Button
					key={number}
					children={number}
					onClick={() => handleNumbersClick(number)}
					style={{
						backgroundColor: themeBackground,
						color: themeColor,
						...(number === '1' && {gridArea: '3 / 1 / 4 / 2'}),
						...(number === '2' && {gridArea: '3 / 2 / 4 / 3'}),
						...(number === '3' && {gridArea: '3 / 3 / 4 / 4'}),
						...(number === '4' && {gridArea: '2 / 1 / 3 / 2'}),
						...(number === '5' && {gridArea: '2 / 2 / 3 / 3'}),
						...(number === '6' && {gridArea: '2 / 3 / 3 / 4'}),
						...(number === '7' && {gridArea: '1 / 1 / 2 / 2'}),
						...(number === '8' && {gridArea: '1 / 2 / 2 / 3'}),
						...(number === '9' && {gridArea: '1 / 3 / 2 / 4'}),
						...(number === '0' && {gridArea: '4 / 2 / 5 / 5'}),
					}}
				/>
			))}
			<Button
				key={'.'}
				onClick={handleDotClick}
				style={{
					backgroundColor: themeBackground,
					color: themeColor,
					gridArea: '4 / 1 / 5 / 2',
				}}>.</Button>



			<Button
				key={'deleteIcon'}
				onClick={handleDeleteLastValue}
				style={{
					backgroundColor: themeBackground,
					color: themeColor,
					gridArea: '4 / 3 / 5 / 4',
				}}>
				{theme === "dark" ?
				(<DeleteIcon/> ):( <DeleteIconDark/>) }
			</Button>
		</div>
	);
}

export default NumberButtonsField;
