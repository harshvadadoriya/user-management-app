import React, { useState } from 'react';
import { Formik, Form, FormikHelpers, useField, FormikProps } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../Formik/FormikControl';
import { InputControlType, SignUpFormValues } from '../../interface/interfaces';
import SignupImg from '../../assets/signup-image.png';
import { toast } from 'react-hot-toast';
import FileInput from '../../Formik/FileInput';

const initialValues: SignUpFormValues = {
	name: '',
	email: '',
	phone: '',
	password: '',
	confirmPassword: '',
	image: null,
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
	image: Yup.mixed().required('Image is required'), // Add validation for the image field
});

const onSubmit = (
	values: SignUpFormValues,
	onSubmitProps: FormikHelpers<SignUpFormValues>
) => {
	console.log('Form data', values);
	console.log(values.image);

	toast.success('You have successfully signed in', { duration: 1500 });
	onSubmitProps.resetForm();
};

const Signup: React.FC = () => {
	return (
		<>
			<div className="flex flex-row justify-center flex-wrap mt-5 mx-5">
				<div className="">
					<p className="text-5xl font-medium mx-2">Sign up</p>
					<div className="mt-8 mx-2">
						<div className="flex mb-3 justify-center">Photo +</div>
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
										<FileInput label="Image" name="image" />
										<button
											type="submit"
											className="bg-blue-500 hover:bg-blue-600 text-white border-none outline-none font-normal py-2 px-4 mt-1 rounded"
										>
											Submit
										</button>
										<button
											type="reset"
											className="bg-red-500 hover:bg-red-600 text-white border-none outline-none font-normal py-2 px-4 mx-3 mt-1 rounded"
										>
											Reset
										</button>
									</Form>
								);
							}}
						</Formik>
					</div>
				</div>
				<div className="signupImg">
					<img className="w-full" src={SignupImg} />
				</div>
			</div>
		</>
	);
};

export default Signup;
