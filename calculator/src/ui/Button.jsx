import React from 'react';
import styles from './Button.module.css';

function Button({children, style, onClick}) {
	return (
		<div className={styles.Button} style={style} onClick={onClick}>
			{children}
		</div>
	);
}

export default Button;
