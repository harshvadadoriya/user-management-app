export interface IOption {
	key: string;
	value: string;
}

export interface SignUpFormValues {
	name?: string;
	email: string;
	phone?: string;
	password: string;
	confirmPassword?: string;
	image?: string | undefined;
}

export interface Props {
	control?: string;
	label?: string;
	name: string;
	placeholder?: string;
	options?: { key: string; value: string }[];
	type?: string;
	className?: string;
}

export interface TextErrorProps {
	children?: React.ReactNode;
}

export enum InputControlType {
	Input = 'input',
}
