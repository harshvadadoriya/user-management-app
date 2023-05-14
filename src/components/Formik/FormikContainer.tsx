import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import { IFormValues, IOption } from '../../interface/interfaces';

const FormikContainer = () => {
	const dropDownOptions: IOption[] = [
		{ key: 'Select an option', value: '' },
		{ key: 'Option 1', value: 'option1' },
		{ key: 'Option 2', value: 'option2' },
		{ key: 'Option 3', value: 'option3' },
	];
	const radioOptions: IOption[] = [
		{ key: 'Option 1', value: 'rOption1' },
		{ key: 'Option 2', value: 'rOption2' },
		{ key: 'Option 3', value: 'rOption3' },
	];
	const checkboxOptions: IOption[] = [
		{ key: 'Option 1', value: 'cOption1' },
		{ key: 'Option 2', value: 'cOption2' },
		{ key: 'Option 3', value: 'cOption3' },
	];

	const initialValue: IFormValues = {
		email: '',
		description: '',
		selectOption: '',
		radioOption: '',
		checkboxOption: [],
	};
	const validationSchema = Yup.object({
		email: Yup.string().required('Required'),
		description: Yup.string().required('Required'),
		selectOption: Yup.string().required('Required'),
		radioOption: Yup.string().required('Required'),
		checkboxOption: Yup.array().min(1, 'Required'),
		birthDate: Yup.date().required('Required'),
	});
	const onSubmit = (values: IFormValues) => console.log('Form data', values);
	return (
		<Formik
			initialValues={initialValue}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{(formik) => (
				<Form>
					<FormikControl
						control="input"
						type="email"
						label="Email"
						name="email"
					/>
					<FormikControl
						control="textarea"
						label="Description"
						name="description"
					/>
					<FormikControl
						control="select"
						label={'select a Topic'}
						name="selectOption"
						options={dropDownOptions}
					/>
					<FormikControl
						control="radio"
						label="Radio Topic"
						name="radioOption"
						options={radioOptions}
					/>
					<FormikControl
						control="checkbox"
						label="Checkbox topics"
						name="checkboxOption"
						options={checkboxOptions}
					/>
					<FormikControl control="date" label="Pick a date" name="birthDate" />
					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	);
};

export default FormikContainer;
