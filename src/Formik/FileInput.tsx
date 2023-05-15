// import React from 'react';
// import { useField, FieldInputProps } from 'formik';

// interface FileInputProps {
// 	label: string;
// 	name: string;
// }

// const FileInput: React.FC<FileInputProps> = ({ label, name }) => {
// 	const [, meta, helpers] = useField(name);

// 	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		const file = event.currentTarget.files && event.currentTarget.files[0];
// 		helpers.setValue(file);
// 	};

// 	return (
// 		<div className="mb-5">
// 			<label htmlFor={name}>{label}</label>
// 			<input
// 				id={name}
// 				type="file"
// 				onChange={handleFileChange}
// 				onBlur={() => helpers.setTouched(true)}
// 			/>
// 			{meta.touched && meta.error && (
// 				<div className="text-red-500">{meta.error}</div>
// 			)}
// 		</div>
// 	);
// };

// export default FileInput;
import React from 'react';
import { Field, ErrorMessage, useField } from 'formik';
import TextError from './TextError';
import { Props } from '../interface/interfaces';

const FileInput: React.FC<Props> = ({ label, name }) => {
	const [field, meta, helpers] = useField(name);

	const handleFileChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = event.currentTarget.files && event.currentTarget.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = () => {
				if (reader.readyState === 2) {
					const base64 = reader.result as string;
					helpers.setValue(base64);
				}
			};

			reader.readAsDataURL(file);
		} else {
			helpers.setValue('');
		}
	};

	return (
		<div className="mb-5">
			<label htmlFor={name}>{label}</label>
			<input
				id={name}
				type="file"
				onChange={handleFileChange}
				onBlur={field.onBlur}
			/>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default FileInput;
