import React from 'react';
import DownArrowButtonStyles from './DownArrowButton.module.css';
import ArrowDownIcon from '../../assets/ArrowDownIcon';

const DownArrowButton = ({nextScreen}) => {
	return (
		<div className={DownArrowButtonStyles.down_btn} onClick={nextScreen} >
			<ArrowDownIcon />
		</div>
	);
};

export default DownArrowButton;
