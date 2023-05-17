import React, { useEffect } from 'react';
import { logout, SignupUserData } from '../../redux/SignupSlice/SignupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { toast } from 'react-hot-toast';

const Home = () => {
	const SignedUserData = useAppSelector(SignupUserData);
	const dispatch = useAppDispatch();
	const logoutHandler = () => {
		toast('Logout successful. come back soon!', {
			duration: 3000,
			icon: '⚠',
		});
		dispatch(logout());
	};
	return (
		<>
			<div className="w-full bg-gray-100">
				<nav
					id="header"
					className="bg-gradient-to-br from-indigo-400 to-indigo-500 shadow-lg"
				>
					<div className="w-full flex items-center justify-between mt-0 px-2 py-2">
						<div className="flex items-center justify-start px-4 py-2 font-medium text-lg text-white">
							User Management System
						</div>
						<div
							className="flex flex-wrap items-center justify-end mr-4"
							id="nav-content"
						>
							<div className="flex items-center w-full md:w-full">
								<button
									className="bg-indigo-500 shadow-lg rounded-lg font-medium text-white h-[2.5rem] w-[7rem]"
									onClick={logoutHandler}
								>
									Logout
								</button>
							</div>
						</div>
					</div>
				</nav>
				{SignedUserData && (
					<div className="flex items-center justify-center h-[100vh]">
						<div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
							<img
								className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto bg-gray-300"
								src={SignedUserData.image}
							/>
							<h1 className="text-lg text-gray-700">{SignedUserData.name}</h1>
							<h3 className="text-sm text-gray-400 ">{SignedUserData.email}</h3>
							<p className="text-xs text-gray-400 mt-4">
								{SignedUserData.phone}
							</p>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Home;
