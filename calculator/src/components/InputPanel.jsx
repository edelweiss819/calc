import React from 'react';
import OtherOperation from '../ui/OtherOperation';
import NumberButtonsField from '../ui/NumberButtonsField';
import MathOperation from '../ui/MathOperation';
import styles from './InputPanel.module.css';
import {useTheme} from './ThemeContext';

function InputPanel(props) {
	const theme = useTheme();
	const themeClass = theme === 'dark' ? ' dark-theme' : 'light-theme';
	return (
		<div className={`${styles.InputPanel} ${themeClass}`}>
			<OtherOperation/>
			<NumberButtonsField/>
			<MathOperation/>
		</div>
	);
}

export default InputPanel;