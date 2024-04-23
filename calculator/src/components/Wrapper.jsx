import React, { Fragment } from 'react';
import style from "./Wrapper.module.css"
import {useTheme} from '../module/ThemeContext';

function Wrapper(props) {
	const theme = useTheme();
	console.log("Текущая тема:", theme);
	const themeBackground = theme === 'dark' ? `var(--dark-background)` : `var(--light-background)`;
	const themeColor = theme === `dark` ? `var(--white)` : `var(--black)`;
	return (
		<div className={style.Wrapper}
			 style ={{backgroundColor: themeBackground,
		color:themeColor}}>
			{props.children}
		</div>
	);
}

export default Wrapper;
