import Signup from './components/SignUp/Signup';
import './App.css';
import { Toaster } from 'react-hot-toast';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
	RouterProvider,
} from 'react-router-dom';
import Home from './components/Home/Home';
import PageNotFound from './components/PagNotFound/PageNotFound';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import persistStore from 'redux-persist/es/persistStore';

const persistor = persistStore(store);

const router = createBrowserRouter(
	createRoutesFromElements(
		// Nested routing
		<Route path="/" element={<Outlet />}>
			<Route index element={<Signup />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/home" element={<Home />} />
			{/*  only match this when no other routes match  */}
			<Route path="*" element={<PageNotFound />} />
		</Route>
	)
);

const App = (): JSX.Element => {
	return (
		<>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<RouterProvider router={router} />
				</PersistGate>
				<Toaster />
			</Provider>
		</>
	);
};

export default App;
