import React from 'react';
import { TextErrorProps } from '../interface/interfaces';

const TextError = (props: TextErrorProps) => {
	return <div className="text-red-600 font-normal">{props.children}</div>;
};

export default TextError;
