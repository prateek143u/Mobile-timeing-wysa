import { React, useState } from 'react';
import TextWrapper from '../Components/TextWrapper/TextWrapper';
import DownArrowButton from '../Components/DownArrowButoon/DownArrowButton';
import ScreenStyles from './Screen.module.css';
import { useNavigate } from 'react-router-dom';
import { API_REQUEST_URL } from '../config/axios.config';

const ScreenLogin = () => {
	const [nickname, setNickname] = useState('');
	const navigate = useNavigate();
	const nicknameChangeHandler = (e) => {
		setNickname(e.target.value);
	};

	const nextButtonClicked = async () => {
		try {
			const res = await API_REQUEST_URL.post('/user', { nickname });
			localStorage.setItem('user', JSON.stringify(nickname));
			navigate(res.data.redirectUrl);
		} catch (error) {
			console.log(error);
		}
	};
	const text =
		"Our conversations are private & anonymus, so there is no login. Just choose nick name we're good to go.";
	return (
		<div className={ScreenStyles.screen_container}>
			<h1 className={ScreenStyles.login_header}>
				Hey! I'm <span>wysa</span>
			</h1>
			<TextWrapper text={text} />
			<div className={ScreenStyles.btns_container}>
				<div className={ScreenStyles.login_input}>
					<input
						type="text"
						placeholder="Choose a nickname..."
						className={ScreenStyles.login_inputbox}
						value={nickname}
						onChange={nicknameChangeHandler}
					/>
				</div>
			</div>
			<div className={!nickname ? ScreenStyles.hide_element : undefined}>
				<DownArrowButton nextScreen={nextButtonClicked} />
			</div>
			<div className={ScreenStyles.acknowledge_container}>
				<p className={ScreenStyles.acknowledge_text}>
					By continuing, I confirm I am 13 or older and accept the{' '}
					<span>Terms of Service</span> and{' '}
					<span>Privacy Policy</span>{' '}
				</p>
				<p style={{ color: '#fbc02d', fontWeight: 300 }}>
					Please use in mobile view
				</p>
			</div>
		</div>
	);
};

export default ScreenLogin;
