import Signup from './components/SignUp/Signup';
import './App.css';
import { Toaster } from 'react-hot-toast';

const App = (): JSX.Element => {
	return (
		<>
			<Signup />
			<Toaster />
		</>
	);
};

export default App;
