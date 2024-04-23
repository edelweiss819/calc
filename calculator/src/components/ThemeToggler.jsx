import React from 'react';
import Moon from '../assets/svg/Moon';
import Sun from "../assets/svg/Sun"
import styles from './ThemeToogler.module.css';
import {useTheme, useThemeDispatch} from '../module/ThemeContext';


function ThemeToggler(props) {
	const theme = useTheme();
	const themeDispatch = useThemeDispatch();
	const handleTheme = () => {
		themeDispatch({
			type: 'toggle_theme',
		});
	};
	return (
		theme === "dark" ? (
			<div className={styles.form}
			 onClick={handleTheme}>
			<div className={styles.circle}></div>
			<Moon style={{float: 'right'}}/>
		</div>) : (
			<div className={styles.form__lightTheme}
				 onClick={handleTheme}>
				<Sun style={{float: 'left'}}/>
				<div className={styles.circle__lightTheme}></div>
			</div>
		)

	);
}

export default ThemeToggler;