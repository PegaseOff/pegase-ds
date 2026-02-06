import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', ...rest }) => {
	const cls = `pgs-button ${variant === 'secondary' ? 'pgs-button--secondary' : ''} ${className}`.trim();
	return (
		<button className={cls} {...rest}>
			{children}
		</button>
	);
};

export default Button;
