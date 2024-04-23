import React, {useContext} from 'react';
import style from './OutputValue.module.css';
import {CalcContext} from '../module/CalcContext';
import {useTheme} from '../module/ThemeContext';

function OutputValue(prop) {
	const calc = useContext(CalcContext);
	const calcToString = calc.join('');
	const theme = useTheme();
	const themeBackground = theme === 'dark' ? `var(--dark-background)` : `var(--light-background)`;
	const themeColor = theme === `dark` ? `var(--white)` : `var(--black)`;

	return (
		<div>
			<input
				className={style.OutputValue}
				style ={{backgroundColor: themeBackground,
					color:themeColor}}
				defaultValue={calcToString}
				placeholder={"input"}
			/>
		</div>
	);
}

export default OutputValue;
