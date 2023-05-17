import React, { useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import TextError from './TextError';
import { Props } from '../interface/interfaces';

const FileInput = ({ label, name }: Props) => {
	const [field, meta, helpers] = useField(name);
	const [selectedImg, setSelectedImg] = useState<string | null>(null);

	const handleFileChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = event.currentTarget.files && event.currentTarget.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = () => {
				if (reader.readyState === 2) {
					const base64 = reader.result as string;
					setSelectedImg(base64);
					helpers.setValue(base64);
				}
			};

			reader.readAsDataURL(file);
		} else {
			helpers.setValue('');
		}
	};

	return (
		<>
			<label className="cursor-pointer" htmlFor={name}>
				{label}
				<input id={name} type="file" onChange={handleFileChange} />
			</label>
			{selectedImg && (
				<div className="w-[6rem] h-full grid place-items-center">
					<img src={selectedImg} alt="Preview" />
				</div>
			)}
			<ErrorMessage name={name} component={TextError} />
		</>
	);
};

export default FileInput;
