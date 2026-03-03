import React from 'react';
import { Size } from '../../utils/types';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
    size?: Size;
};

export const Card: React.FC<CardProps> = ({ children, className = '', size = 'medium', ...rest }) => {
    const cls = `pgs-card card-size-${size} ${className}`.trim();
    return (
        <div className={cls} {...rest}>
            {children}
        </div>
    );
};

export type CardImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
export const CardImage: React.FC<CardImageProps> = ({ className = '', alt = '', ...rest }) => (
    <img className={`pgs-card-image ${className}`.trim()} alt={alt} {...rest} />
);

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '', ...rest }) => (
    <div className={`pgs-card-header ${className}`.trim()} {...rest}>
        {children}
    </div>
);

export type CardBodyProps = React.HTMLAttributes<HTMLDivElement>;
export const CardBody: React.FC<CardBodyProps> = ({ children, className = '', ...rest }) => (
    <div className={`pgs-card-body ${className}`.trim()} {...rest}>
        {children}
    </div>
);


export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;
export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '', ...rest }) => (
    <div className={`pgs-card-footer ${className}`.trim()} {...rest}>
        {children}
    </div>
);