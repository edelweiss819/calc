import React from 'react';
import style from './LastOperationInfo.module.css';
import {useTheme} from '../components/ThemeContext';

function LastOperationInfo(props) {
	const theme = useTheme();

	const themeBackground = theme === 'dark' ? `var(--dark-background)` : `var(--light-background)`;
	const themeColor = theme === `dark` ? `var(--white)` : `var(--black)`;

	return (
		<div>
			<input
				className={style.LastOperationInfo}
				style ={{backgroundColor: themeBackground,
					color:themeColor}}
				placeholder={'6,291÷5'}/>
		</div>
	);
}

export default LastOperationInfo;