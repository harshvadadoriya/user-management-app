import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import Radio from './Radio';
import CheckboxGroup from './CheckboxGroup';
import { Props } from '../../interface/interfaces';

const FormikControl: React.FC<Props> = ({ control, ...rest }) => {
	switch (control) {
		case 'input':
			return <Input {...rest} />;
		case 'textarea':
			return <TextArea {...rest} />;
		case 'select':
			return <Select {...rest} />;
		case 'radio':
			return <Radio {...rest} />;
		case 'checkbox':
			return <CheckboxGroup {...rest} />;
		default:
			return null;
	}
};

export default FormikControl;
