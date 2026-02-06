import React from 'react';
import './badge.css';

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
	variant?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
};

export const Badge: React.FC<BadgeProps> = ({ children, className = '', variant = 'primary', ...rest }) => {
	const cls = `pgs-badge pgs-badge--${variant} ${className}`.trim();
	return (
		<span className={cls} {...rest}>
			{children}
		</span>
	);
};

export default Badge;
