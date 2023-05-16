import React from 'react';
import { SignupUserData } from '../../redux/SignupSlice/SignupSLice';
import { useAppSelector } from '../../redux/store';

const Home = () => {
	const SignedUserData = useAppSelector(SignupUserData);
	return (
		<>
			<div className="w-full bg-gradient-to-br from-indigo-200 to-indigo-400">
				<nav
					id="header"
					className="w-full z-30 top-10 py-1 bg-white shadow-lg border-b border-blue-400"
				>
					<div className="w-full flex items-center justify-between mt-0 px-2 py-2">
						<div className="flex items-center justify-start px-4 py-2 font-medium text-lg text-indigo-400">
							User Management System
						</div>
						<div
							className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
							id="nav-content"
						>
							<div className="auth flex items-center w-full md:w-full">
								<button className="bg-indigo-500 shadow-lg rounded-lg font-medium text-white h-[2.5rem] w-[7rem]">
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
								alt="product designer"
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
