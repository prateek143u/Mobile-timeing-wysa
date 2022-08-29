import TextWrapper from '../Components/TextWrapper/TextWrapper';
import ScreenStyles from './Screen.module.css';
import { useLocation } from 'react-router-dom';

const ScreenSleepHours = () => {
	const location = useLocation();
	const text =
		`You seem to have a sleep efficiency of ${location.state.efficiency}%. We'll get this upto 80%`;
	return (
		<div className={ScreenStyles.screen_container}>
			<TextWrapper text={text} />
			<h1 style={{ textAlign:'center' }} >&#128526;</h1>
		</div>
	);
};

export default ScreenSleepHours;
