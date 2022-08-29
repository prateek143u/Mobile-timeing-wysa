import DownArrowButton from '../Components/DownArrowButoon/DownArrowButton';
import TextWrapper from '../Components/TextWrapper/TextWrapper';
import ScreenStyles from './Screen.module.css';
import Button from '../Components/Button/ Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { API_REQUEST_URL } from '../config/axios.config';

const text =
	"That's a great goal. How long have you been struggling with your sleep?";

const buttonsText = [
	{ id: 1, text: 'Less than 2 weeks' },
	{ id: 2, text: '2 to 8 weeks' },
	{ id: 3, text: 'More than 8 weeks' },
];

const ScreenSleepStrugglingPeriod = () => {
	const [clickedButtonId, setClickedButtonId] = useState(0);
	const navigate = useNavigate();

	const nextButtonClicked = async () => {
		try {
			const nickname = JSON.parse(localStorage.getItem('user'));
			const textToupdate = buttonsText[clickedButtonId - 1].text;
			const res = await API_REQUEST_URL.put(
				'/user/sleep-struggling-period',
				{ nickname, textToupdate }
			);
			navigate(res.data.redirectUrl);
		} catch (error) {
			console.log(error);
		}
	};

	const buttonDataChangeHandler = (id) => {
		setClickedButtonId(id);
	};

	return (
		<div className={ScreenStyles.screen_container}>
			<TextWrapper text={text} />
			<div className={ScreenStyles.btns_container}>
				{buttonsText.map((item) => (
					<Button
						key={item.id}
						data={item}
						buttonData={buttonDataChangeHandler}
					/>
				))}
			</div>
			<div
				className={
					clickedButtonId === 0
						? ScreenStyles.hide_element
						: undefined
				}
			>
				<DownArrowButton nextScreen={nextButtonClicked} />
			</div>
		</div>
	);
};

export default ScreenSleepStrugglingPeriod;
