import React from 'react';
import { Field, ErrorMessage, FieldProps } from 'formik';
import TextError from './TextError';

type CheckboxGroupProps = {
	label?: string;
	name: string;
	options?: { key: string; value: string }[];
};

function CheckboxGroup(props: CheckboxGroupProps) {
	const { label, name, options, ...rest } = props;
	return (
		<div className="formControl">
			<label>{label}</label>
			<Field name={name}>
				{({ field }: FieldProps) => {
					return options?.map((option) => {
						return (
							<React.Fragment key={option.key}>
								<input
									type="checkbox"
									id={option.value}
									{...field}
									{...rest}
									value={option.value}
									checked={Boolean(field.value.includes(option.value))}
								/>
								<label htmlFor={option.value}>{option.key}</label>
							</React.Fragment>
						);
					});
				}}
			</Field>
			<ErrorMessage component={TextError} name={name} />
		</div>
	);
}

export default CheckboxGroup;
