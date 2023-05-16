// import Signup from './components/SignUp/Signup';
// import './App.css';
// import { Toaster } from 'react-hot-toast';
// import {
// 	createBrowserRouter,
// 	createRoutesFromElements,
// 	Outlet,
// 	Route,
// 	Navigate,
// 	RouterProvider,
// 	BrowserRouter,
// 	Routes,
// 	useNavigate,
// } from 'react-router-dom';
// import Home from './components/Home/Home';
// import PageNotFound from './components/PagNotFound/PageNotFound';
// import { Provider } from 'react-redux';
// import { store, useAppSelector } from './redux/store';
// import { PersistGate } from 'redux-persist/lib/integration/react';
// import persistStore from 'redux-persist/es/persistStore';
// import { isLoggedIn } from './redux/SignupSlice/SignupSlice';

// const persistor = persistStore(store);

// const router = createBrowserRouter(
// 	createRoutesFromElements(
// 		// Nested routing
// 		<Route path="/" element={<Outlet />}>
// 			<Route index element={<Signup />} />
// 			{/* <Route
// 				path="/"
// 				element={
// 					isAuthenticated ? <Home /> : <Navigate replace to={'/signup'} />
// 				}
// 			/> */}
// 			{/* <Route path="/signup" element={<Signup />} /> */}
// 			<Route path="/home" element={<Home />} />
// 			{/*  only match this when no other routes match  */}
// 			<Route path="*" element={<PageNotFound />} />
// 		</Route>
// 	)
// );
// const App = (): JSX.Element => {
// 	return (
// 		<>
// 			<Provider store={store}>
// 				<PersistGate persistor={persistor}>
// 					<RouterProvider router={router} />
// 					{/* <BrowserRouter>
// 						<Routes>
// 							<Route path="/" element={<Outlet />}>
// 								<Route index element={<Signup />} />
// 								<Route path="/signup" element={<Signup />} />
// 								<Route path="/home" element={<Home />} />
// 								<Route path="*" element={<PageNotFound />} />
// 								<Route />
// 							</Route>
// 						</Routes>
// 					</BrowserRouter> */}
// 				</PersistGate>
// 				<Toaster />
// 			</Provider>
// 		</>
// 	);
// };

// export default App;
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import './App.css';

import Signup from './components/SignUp/Signup';
import Home from './components/Home/Home';
import PageNotFound from './components/PagNotFound/PageNotFound';

const persistor = persistStore(store);

const App = () => {
	const isLoggedIn = store.getState().signup.isLoggedIn;

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route>
							<Route
								path="/"
								element={isLoggedIn ? <Navigate to="/home" /> : <Signup />}
							/>
							<Route
								path="/signup"
								element={isLoggedIn ? <Navigate to="/home" /> : <Signup />}
							/>
							<Route
								path="/home"
								element={isLoggedIn ? <Home /> : <Navigate to="/signup" />}
							/>
							<Route path="*" element={<PageNotFound />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
};

export default App;
