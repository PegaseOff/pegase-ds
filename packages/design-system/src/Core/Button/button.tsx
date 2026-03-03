import React from 'react';
import { Size, Variant } from '../../utils/types';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: Variant;
	size?: Size;
};

export const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', size = 'medium', disabled = false, ...rest }) => {
	const cls = `pgs-button btn-variant-${variant} btn-size-${size} ${className}`.trim();
	return (
		<button className={cls} disabled={disabled} {...rest}>
			{children}
		</button>
	);
};