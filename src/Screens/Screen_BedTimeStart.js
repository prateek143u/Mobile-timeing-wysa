import DownArrowButton from '../Components/DownArrowButoon/DownArrowButton';
import TextWrapper from '../Components/TextWrapper/TextWrapper';
import ScreenStyles from './Screen.module.css';
import { BasicTimePicker } from '../Components/TimePicker/BasicTimePicker';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { API_REQUEST_URL } from '../config/axios.config';

const ScreenBedTimeStart = () => {
	const navigate = useNavigate();
	const [timeToUpdate, setTimeToUpdate] = useState();
	const nextButtonClicked = async () => {
		try {
			const nickname = JSON.parse(localStorage.getItem('user'));
			const res = await API_REQUEST_URL.put('/user/bed-time-start', {
				nickname,
				timeToUpdate,
			});
			navigate(res.data.redirectUrl);
		} catch (error) {
			console.log(error);
		}
	};

	const timePickHandler = (time) => {
		setTimeToUpdate(time);
	};

	const text = 'What time do you go to bed to start sleep?';
	return (
		<div className={ScreenStyles.screen_container}>
			<TextWrapper text={text} />
			<div className={ScreenStyles.btns_container}>
				<button className={ScreenStyles.btn}>
					<BasicTimePicker changeTimeHandler={timePickHandler} />
				</button>
			</div>
			<DownArrowButton nextScreen={nextButtonClicked} />
		</div>
	);
};

export default ScreenBedTimeStart;
