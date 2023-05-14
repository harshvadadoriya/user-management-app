import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import { Props } from '../../interface/interfaces';

const Input = (props: Props) => {
	const { label, name, ...rest } = props;
	return (
		<div className="formControl">
			<label htmlFor={name}>{label}</label>
			<Field id={name} name={name} {...rest} />
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default Input;
