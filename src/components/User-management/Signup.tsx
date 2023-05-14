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
		.required('Required'),
	email: Yup.string()
		.email('Invalid email format')
		.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email format')
		.required('Required'),
	phone: Yup.string()
		.matches(/^(\+91[\s]?)?[0]?(91)?[789]\d{9}$/, 'Invalid phone number')
		.required('Required'),
	password: Yup.string().required('Required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), ''], 'Passwords must match')
		.required('Required'),
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
								className="focus:outline-none w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:shadow-outline bg-antiquewhite"
							/>
							<FormikControl
								control={InputControlType.Input}
								type="email"
								label="Email"
								name="email"
							/>
							<FormikControl
								control={InputControlType.Input}
								type="text"
								label="Phone number"
								name="phone"
							/>
							<FormikControl
								control={InputControlType.Input}
								type="password"
								label="Password"
								name="password"
							/>
							<FormikControl
								control={InputControlType.Input}
								type="password"
								label="Confirm Password"
								name="confirmPassword"
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
