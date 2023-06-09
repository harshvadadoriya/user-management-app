import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../Formik/FormikControl';
import { InputControlType, SignUpFormValues } from '../../interface/interfaces';

const initialValues: SignUpFormValues = {
	name: '',
	email: '',
	phone: '',
	password: '',
	confirmPassword: '',
};

const validationSchema = Yup.object({
	name: Yup.string()
		.matches(/^[a-zA-Z\s]{15,}$/, 'Name must be at least 15 characters long')
		.required('Name is required'),
	email: Yup.string()
		.email('Your email is invalid')
		.matches(
			/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
			'Your email is invalid'
		)
		.required('Email is required'),
	phone: Yup.string()
		.matches(/^(\+91[\s]?)?[0]?(91)?[789]\d{9}$/, 'Invalid phone number')
		.required('Phone number is required'),
	password: Yup.string().required('Password is required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), ''], 'Passwords does not match')
		.required('Confirm Password is required'),
});

const onSubmit = (
	values: SignUpFormValues,
	{ setSubmitting }: FormikHelpers<SignUpFormValues>
) => {
	console.log('Form data', values);
	setSubmitting(false);
};

const Signup: React.FC = () => {
	return (
		<div className="mt-5">
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{(formik) => {
					return (
						<Form>
							<FormikControl
								control={InputControlType.Input}
								type="text"
								label="Name"
								name="name"
								placeholder="Enter your name"
								className="text-xs  px-4 py-3 bg-custom-red  border-2  border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
							/>
							<FormikControl
								control={InputControlType.Input}
								type="text"
								label="Email"
								name="email"
								placeholder="Enter your email"
								className="text-sm  px-4 py-3 bg-custom-red  border-2  border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
							/>
							<FormikControl
								control={InputControlType.Input}
								type="text"
								label="PhoneNo"
								name="phone"
								placeholder="Enter your phone"
								className="text-sm  px-4 py-3 bg-custom-red  border-2  border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
							/>
							<FormikControl
								control={InputControlType.Input}
								type="password"
								label="Password"
								name="password"
								placeholder="Enter your password"
								className="text-sm  px-4 py-3 bg-custom-red  border-2  border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
							/>
							<FormikControl
								control={InputControlType.Input}
								type="password"
								label="Confirm Password"
								name="confirmPassword"
								placeholder="confirm your password"
								className="text-sm  px-4 py-3 bg-custom-red  border-2  border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
							/>
							<button
								type="submit"
								className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
							>
								Submit
							</button>
							<button
								type="reset"
								className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mx-3 rounded"
							>
								Reset
							</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default Signup;
