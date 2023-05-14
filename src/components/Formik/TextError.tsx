import React from 'react';
import { TextErrorProps } from '../../interface/interfaces';

const TextError = (props: TextErrorProps) => {
	return <div className="error">{props.children}</div>;
};

export default TextError;
