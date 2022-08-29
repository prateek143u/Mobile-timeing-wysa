import ScreenSleepStrugglingPeriod from './Screens/Screen_SleepStrugglingPeriod';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScreenBedTimeStart from './Screens/Screen_BedTimeStart';
import ScreenBedTimeEnd from './Screens/Screen_BedTimeEnd';
import ScreenSleepHours from './Screens/Screen_SleepHours';
import ScreenLogin from './Screens/Screen_login';

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<ScreenLogin />} />
					<Route
						path="sleep-struggling-period"
						element={<ScreenSleepStrugglingPeriod />}
					/>
					<Route
						path="bed-time-start"
						element={<ScreenBedTimeStart />}
					/>
					<Route path="bed-time-end" element={<ScreenBedTimeEnd />} />
					<Route path="sleep-efficiency" element={<ScreenSleepHours />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
