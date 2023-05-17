import React from 'react';
import { useAppSelector } from './redux/store';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/SignUp/Signup';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import './App.css';
import { isUserAuthenticated } from './redux/SignupSlice/SignupSlice';
import Login from './components/Login/Login';

const App = () => {
	const isAuthenticated = useAppSelector(isUserAuthenticated);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route>
						<Route
							path="/"
							element={isAuthenticated ? <Navigate to="/home" /> : <Signup />}
						/>
						<Route
							path="/signup"
							element={isAuthenticated ? <Navigate to="/home" /> : <Signup />}
						/>
						<Route
							path="/login"
							element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
						/>
						<Route
							path="/home"
							element={isAuthenticated ? <Home /> : <Navigate to="/signup" />}
						/>
						{/* <Route path="/login" element={<Login />} /> */}
						<Route path="*" element={<PageNotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
