import { React, useState } from 'react';
import ScreenStyles from '../../Screens/Screen.module.css';

const Button = ({ data, buttonData }) => {
	const [isClicked, setIsClicked] = useState(false);
	const buttonClickHandler = () => {
		buttonData(data.id);
		setIsClicked(!isClicked);
	};

	return (
		<button
			className={isClicked ? ScreenStyles.btn_clicked : ScreenStyles.btn}
			onClick={buttonClickHandler}
		>
			{data.text}
		</button>
	);
};

export default Button;
