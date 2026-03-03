import React from 'react';
import { Size } from '../../utils/types';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    size?: Size;
};

export const Input: React.FC<InputProps> = ({ className = '', size = 'medium', disabled = false, label, ...rest }) => {
    const cls = `pgs-input input-size-${size} ${className}`.trim();
    return (
        <div className="pgs-input-wrapper">
            {label && <label className="pgs-input-label sm-font">{label}</label>}
            <input className={cls} disabled={disabled} {...rest} />
        </div>
    );
};