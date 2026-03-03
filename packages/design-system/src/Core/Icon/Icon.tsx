import React from 'react';
import { Size, Variant } from '../../utils/types';

export type IconProps = React.HTMLAttributes<HTMLSpanElement> & {
    icon: React.ComponentType<{ size?: string | number; color?: string }>;
    size?: Size | number;
    variant?: Variant;
    color?: string;
};

const sizeMap: Record<Size, number> = {
    small: 16,
    medium: 24,
    large: 32,
};

const variantMap: Record<Variant, string> = {
    primary: 'var(--primary-color)',
    secondary: 'var(--secondary-color)',
    success: 'var(--success-color)',
    danger: 'var(--danger-color)',
    warning: 'var(--warning-color)',
    info: 'var(--info-color)',
};

export const Icon: React.FC<IconProps> = ({
    icon: IconComponent,
    size = 'medium',
    variant = 'primary',
    color,
    className = '',
    ...rest
}) => {
    const numericSize = typeof size === 'number' ? size : sizeMap[size];
    const iconColor = color || variantMap[variant];

    return (
        <span className={`pgs-icon ${className}`.trim()} {...rest}>
            <IconComponent size={numericSize} color={iconColor} />
        </span>
    );
};
