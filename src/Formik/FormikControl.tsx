import Input from './Input';
import { InputControlType, Props } from '../interface/interfaces';

const FormikControl = ({ control, ...rest }: Props) => {
	switch (control) {
		case InputControlType.Input:
			return <Input {...rest} />;
		default:
			return null;
	}
};

export default FormikControl;
