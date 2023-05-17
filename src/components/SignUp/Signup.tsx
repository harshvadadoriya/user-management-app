import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../Formik/FormikControl';
import { InputControlType, SignUpFormValues } from '../../interface/interfaces';
import SignupImg from '/assets/signup-image.png';
import { toast } from 'react-hot-toast';
import FileInput from '../../Formik/FileInput';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { addUser } from '../../redux/SignupSlice/SignupSlice';
import { NavLink } from 'react-router-dom';

const initialValues: SignUpFormValues = {
	name: '',
	email: '',
	phone: '',
	password: '',
	confirmPassword: '',
	image: '',
};

const validationSchema = Yup.object({
	name: Yup.string()
		.matches(/^[a-zA-Z\s]{15,}$/, 'Name must be at least 15 characters long')
		.required('Name is required'),
	email: Yup.string()
		.email('Email is invalid')
		.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Email is invalid')
		.required('Email is required'),
	phone: Yup.string()
		.matches(
			/^(\+91[\s]?)?[0]?(91)?[789]\d{9}$/,
			'Please enter valid indian phone number'
		)
		.required('Phone number is required'),
	password: Yup.string()
		.min(8, 'Password must be 8 characters long')
		.required('Password is required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), ''], 'Passwords does not match')
		.required('Confirm Password is required'),
	image: Yup.string()
		// .matches(/data:image\/(png|jpg|);base64?/i, 'Image must be jpg or png')
		.test(
			'fileType',
			'Image must be a JPG or PNG file',
			async function (value) {
				if (!value) {
					return true;
				}
				const fileInput = document.getElementById('image') as HTMLInputElement;
				const file = fileInput.files && fileInput.files[0];
				const fileType = file?.type ?? '';
				const validTypes = ['image/jpg', 'image/png'];
				return validTypes.includes(fileType);
			}
		)
		.test('fileSize', 'Image size must be less than 2MB', function (value) {
			if (!value) {
				return true;
			}
			const fileInput = document.getElementById('image') as HTMLInputElement;
			const file = fileInput.files && fileInput.files[0];
			if (file && file.size) {
				return file.size <= 2 * 1024 * 1024;
			}
			return false;
		})
		.required('Photo is required'),
});

const Signup: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onSubmit = (
		values: SignUpFormValues,
		onSubmitProps: FormikHelpers<SignUpFormValues>
	) => {
		toast.success('You have successfully signed in', { duration: 3000 });
		localStorage.setItem('user', JSON.stringify(values));
		onSubmitProps.resetForm();
		navigate('/home');
		dispatch(addUser(values));
	};

	return (
		<>
			<div className="flex justify-center items-center bg-gray-100 min-h-[100vh] ">
				<div className="flex flex-row justify-center flex-wrap mx-5">
					<div className="Signup">
						<div className="mx-10">
							<p className="text-5xl font-medium mb-8">Sign up</p>
							<Formik
								initialValues={initialValues}
								validationSchema={validationSchema}
								onSubmit={onSubmit}
							>
								{() => {
									return (
										<Form>
											<div className="grid place-items-center mb-3">
												<FileInput label="Photo +" name="image" />
											</div>
											<FormikControl
												control={InputControlType.Input}
												type="text"
												label="Name"
												name="name"
												placeholder="Enter your name"
												className="text-xs  px-4 py-3 bg-custom-input border-2  border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
											/>
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
												type="text"
												label="PhoneNo"
												name="phone"
												placeholder="Enter your phone"
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
											<FormikControl
												control={InputControlType.Input}
												type="password"
												label="Confirm Password"
												name="confirmPassword"
												placeholder="confirm your password"
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
											<div className="my-5">
												<p>
													Already have an account?
													<NavLink
														className="ml-2 text-blue-700 font-medium"
														to="/login"
													>
														Login here
													</NavLink>
												</p>
											</div>
										</Form>
									);
								}}
							</Formik>
						</div>
					</div>
					<div className="signupImg flex items-center">
						<img className="w-full h-[30rem]" src={SignupImg} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
