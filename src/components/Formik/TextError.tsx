import React from 'react';
import { TextErrorProps } from '../../interface/interfaces';

const TextError = (props: TextErrorProps) => {
	return <div className="text-red-600 font-semibold">{props.children}</div>;
};

export default TextError;
