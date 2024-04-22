import React from 'react';
import style from './Content.module.css';
import CalculationDisplay from '../components/CalculationDisplay';
import InputPanel from '../components/InputPanel';

function Content(props) {


	return (
		<div className={style.Content}>
			<CalculationDisplay/>
			<InputPanel/>
		</div>
	);
}

export default Content;