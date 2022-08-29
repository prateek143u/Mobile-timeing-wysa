import React from 'react';
import TextWrapperStyles from './TextWrapper.module.css';
const TextWrapper = ({ text }) => {
	return (
		<div className={TextWrapperStyles.text_container}>
			<h4 className={TextWrapperStyles.text}>{text}</h4>
		</div>
	);
};

export default TextWrapper;
