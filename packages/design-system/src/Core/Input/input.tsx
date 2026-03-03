import React from 'react';
import { Size } from '../../utils/types';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    size?: Size;
};

export const Input: React.FC<InputProps> = ({ className = '', size = 'medium', disabled = false, ...rest }) => {
    const cls = `pgs-input input-size-${size} ${className}`.trim();
    return (
        <input className={cls} disabled={disabled} {...rest} />
    );
};