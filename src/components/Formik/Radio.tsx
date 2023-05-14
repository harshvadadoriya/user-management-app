import React from 'react';
import { Field, ErrorMessage, FieldProps } from 'formik';
import TextError from './TextError';
import { Props } from '../../interface/interfaces';

const Radio = (props: Props) => {
	const { label, name, options, ...rest } = props;
	return (
		<div className="formControl">
			<label>{label}</label>
			<Field name={name} {...rest}>
				{({ field }: FieldProps) => {
					return options?.map((option) => {
						return (
							<React.Fragment key={option.key}>
								<input
									type="radio"
									id={option.value}
									{...field}
									value={option.value}
									checked={field.value === option.value}
								/>
								<label htmlFor={option.value}>{option.key}</label>
							</React.Fragment>
						);
					});
				}}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default Radio;
