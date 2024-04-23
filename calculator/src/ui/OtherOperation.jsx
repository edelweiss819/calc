import React from 'react';
import {useCalcDispatch} from '../module/CalcContext';
import {useTheme} from '../module/ThemeContext';
import Button from './Button';
import styles from './OtherOperation.module.css';
import ChangeSign from '../assets/svg/ChangeSign';
import ChangeSignDark from '../assets/svg/ChangeSignDark';



function OtherOperation() {
	const dispatch = useCalcDispatch();
	const theme = useTheme();
	const themeBackground = theme === `dark` ? `var(--gray)` : `var(--light-gray)`;
	const themeColor = theme === `dark` ? `var(--white)` : `var(--black)`;


	const handleClear = () => {
		dispatch({
			type: 'clear',
		});
	};
	const handleChangeSign = () => {
		dispatch({
			type: 'change-sign',
		});
	};
	const handlePercent = () => {
		dispatch({
			type: 'percent',
		});
	};

	return (
		<div className={styles.otherOperationGrid}>
			<Button key={'clear'}
					onClick={handleClear}
					style={{
						backgroundColor: themeBackground,
						color: themeColor,
						gridArea: '1 / 1 / 2 / 2',
					}}> C </Button>

			<Button key={'percent'}
					onClick={handlePercent}
					style={{
						backgroundColor: themeBackground,
						color: themeColor,
						gridArea: '1 / 3 / 2 / 4',
					}}> % </Button>

			<Button key={'changeSign'}
					onClick={handleChangeSign}
					style={{
						backgroundColor: themeBackground,
						color: themeColor,
						gridArea: '1 / 2 / 2 / 3',
					}}>
				{theme === 'dark'?
					( <ChangeSign/>) : (<ChangeSignDark />)}

			</Button>
		</div>
	);
}

export default OtherOperation;