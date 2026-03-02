import React from 'react';
import { Size, Variant } from '../../utils/types';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: Variant;
	size?: Size;
};

export const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', size = 'medium', ...rest }) => {
	const cls = `pgs-button btn-variant-${variant} btn-size-${size} ${className}`.trim();
	return (
		<button className={cls} {...rest}>
			{children}
		</button>
	);
};