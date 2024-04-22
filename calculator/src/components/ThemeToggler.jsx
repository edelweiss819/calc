import React from 'react';
import Moon from '../assets/svg/Moon';
import styles from './ThemeToogler.module.css';
import {useTheme, useThemeDispatch} from './ThemeContext';


function ThemeToggler(props) {
	const theme = useTheme();
	const themeDispatch = useThemeDispatch();
	const handleTheme = () => {
		themeDispatch({
			type: 'toggle_theme',
		});
	};
	return (
		<div className={styles.form}
			 onClick={handleTheme}>
			<div className={styles.circle}></div>
			<Moon style={{float: 'right'}}/>
		</div>
	);
}

export default ThemeToggler;