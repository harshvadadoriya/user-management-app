import { InputControlType, SignUpFormValues } from '../../interface/interfaces';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import FormikControl from '../../Formik/FormikControl';
import { useAppDispatch } from '../../redux/store';
import { setLoggedIn } from '../../redux/SignupSlice/SignupSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import SignupImg from '/assets/user-login.png';

const initialValues: SignUpFormValues = {
	email: '',
	password: '',
};

const validationSchema = Yup.object({
	email: Yup.string()
		.email('Email is invalid')
		.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Email is invalid')
		.required('Email is required'),
	password: Yup.string()
		.min(8, 'Password must be 8 characters long')
		.required('Password is required'),
});

const Login: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onSubmit = (
		values: SignUpFormValues,
		onSubmitProps: FormikHelpers<SignUpFormValues>
	) => {
		const userData: string | null = localStorage.getItem('user');
		if (userData) {
			const { email: storedEmail, password: storedPassword } =
				JSON.parse(userData);

			if (values.email === storedEmail && values.password === storedPassword) {
				// Set the isLoggedIn state to true in Redux
				dispatch(setLoggedIn(true));

				// Show success toast message
				toast.success('Login successful');
				onSubmitProps.resetForm();

				// Redirect to the Home page
				navigate('/home');
				console.log(userData);

				// dispatch(addUser(userData));
			} else {
				// Show error toast message
				toast.error('Invalid email or password');
			}
		}
	};

	return (
		<>
			<div className="flex justify-center items-center bg-gray-100 min-h-[100vh]">
				<div className="flex flex-row justify-center flex-wrap mx-5 Login">
					<div className="flex items-center">
						<div className="mx-5">
							<p className="text-5xl font-medium mb-8">Log in</p>
							<Formik
								initialValues={initialValues}
								validationSchema={validationSchema}
								onSubmit={onSubmit}
							>
								{() => {
									return (
										<Form>
											<FormikControl
												control={InputControlType.Input}
												type="text"
												label="Email"
												name="email"
												placeholder="Enter your email"
												className="text-sm  px-4 py-3 bg-custom-input border-2  border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
											/>

											<FormikControl
												control={InputControlType.Input}
												type="password"
												label="Password"
												name="password"
												placeholder="Enter your password"
												className="text-sm  px-4 py-3 bg-custom-input border-2  border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
											/>

											<button
												type="submit"
												className="bg-blue-500 hover:bg-blue-600 text-white border-none outline-none font-normal py-2 px-4 mt-2 rounded"
											>
												Submit
											</button>
											<button
												type="reset"
												className="bg-red-500 hover:bg-red-600 text-white border-none outline-none font-normal py-2 px-4 mx-3 rounded"
											>
												Reset
											</button>
											<div className="mt-5">
												<p>
													Don't have an account yet?
													<NavLink
														className="ml-2 text-indigo-500"
														to="/signup"
													>
														Sign up here
													</NavLink>
												</p>
											</div>
										</Form>
									);
								}}
							</Formik>
						</div>
					</div>
					<div className="signupImg">
						<img className="max-w-[30rem]" src={SignupImg} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
