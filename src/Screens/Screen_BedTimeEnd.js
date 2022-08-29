import DownArrowButton from '../Components/DownArrowButoon/DownArrowButton';
import TextWrapper from '../Components/TextWrapper/TextWrapper';
import ScreenStyles from './Screen.module.css';
import { BasicTimePicker } from '../Components/TimePicker/BasicTimePicker';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { API_REQUEST_URL } from '../config/axios.config';

const ScreenBedTimeEnd = () => {
	const navigate = useNavigate();
	const [timeToUpdate, setTimeToUpdate] = useState();
	const timePickHandler = (time) => {
		setTimeToUpdate(time);
	};
	const nextButtonClicked = async () => {
		try {
			const nickname = JSON.parse(localStorage.getItem('user'));
			const res = await API_REQUEST_URL.put('/user/bed-time-end', {
				nickname,
				timeToUpdate,
			});
			const efficiency = res.data.efficiency;
			navigate(res.data.redirectUrl, { state: {efficiency}});
		} catch (error) {
			console.log(error);
		}
	};

	const text = 'What time do you get out of bed to start your day?';
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

export default ScreenBedTimeEnd;
