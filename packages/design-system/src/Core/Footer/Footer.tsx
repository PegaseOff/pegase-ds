import React from 'react';

export type FooterVariant = 'default' | 'dark' | 'light';
export type FooterProps = React.HTMLAttributes<HTMLElement> & {
    variant?: FooterVariant;
};
export const Footer: React.FC<FooterProps> = ({
    children,
    className = '',
    variant = 'default',
    ...rest
}) => {
    const cls = `pgs-footer footer-variant-${variant} ${className}`.trim();
    return (
        <footer className={cls} {...rest}>
            {children}
        </footer>
    );
};

export type FooterContentProps = React.HTMLAttributes<HTMLDivElement>;
export const FooterContent: React.FC<FooterContentProps> = ({
    children,
    className = '',
    ...rest
}) => (
    <div className={`pgs-footer-content ${className}`.trim()} {...rest}>
        {children}
    </div>
);

export type FooterBrandProps = React.HTMLAttributes<HTMLDivElement> & {
    logoSrc?: string;
    logoAlt?: string;
    name?: string;
    description?: string;
};
export const FooterBrand: React.FC<FooterBrandProps> = ({
    children,
    className = '',
    logoSrc,
    logoAlt = '',
    name,
    description,
    ...rest
}) => (
    <div className={`pgs-footer-brand ${className}`.trim()} {...rest}>
        {logoSrc && <img src={logoSrc} alt={logoAlt} className="pgs-footer-brand-logo" />}
        {name && <span className="pgs-footer-brand-name">{name}</span>}
        {description && <p className="pgs-footer-brand-desc">{description}</p>}
        {children}
    </div>
);

export type FooterNavProps = React.HTMLAttributes<HTMLDivElement>;
export const FooterNav: React.FC<FooterNavProps> = ({
    children,
    className = '',
    ...rest
}) => (
    <nav className={`pgs-footer-nav ${className}`.trim()} aria-label="Footer navigation" {...rest}>
        {children}
    </nav>
);

export type FooterNavGroupProps = React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
};
export const FooterNavGroup: React.FC<FooterNavGroupProps> = ({
    children,
    className = '',
    title,
    ...rest
}) => (
    <div className={`pgs-footer-nav-group ${className}`.trim()} {...rest}>
        {title && <p className="pgs-footer-nav-group-title">{title}</p>}
        <ul role="list">
            {children}
        </ul>
    </div>
);

export type FooterNavItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    disabled?: boolean;
};
export const FooterNavItem: React.FC<FooterNavItemProps> = ({
    children,
    className = '',
    disabled = false,
    href,
    ...rest
}) => {
    const cls = [
        'pgs-footer-nav-item',
        disabled ? 'footer-nav-item-disabled' : '',
        className,
    ].filter(Boolean).join(' ');

    return (
        <li>
            <a
                className={cls}
                href={disabled ? undefined : href}
                aria-disabled={disabled || undefined}
                tabIndex={disabled ? -1 : undefined}
                {...rest}
            >
                {children}
            </a>
        </li>
    );
};

export type FooterSocialProps = React.HTMLAttributes<HTMLDivElement>;
export const FooterSocial: React.FC<FooterSocialProps> = ({
    children,
    className = '',
    ...rest
}) => (
    <div className={`pgs-footer-social ${className}`.trim()} aria-label="Social links" {...rest}>
        {children}
    </div>
);

export type FooterSocialItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    label: string;
};
export const FooterSocialItem: React.FC<FooterSocialItemProps> = ({
    children,
    className = '',
    label,
    ...rest
}) => (
    <a
        className={`pgs-footer-social-item ${className}`.trim()}
        aria-label={label}
        rel="noopener noreferrer"
        target="_blank"
        {...rest}
    >
        {children}
    </a>
);

export type FooterDividerProps = React.HTMLAttributes<HTMLHRElement>;
export const FooterDivider: React.FC<FooterDividerProps> = ({
    className = '',
    ...rest
}) => (
    <hr className={`pgs-footer-divider ${className}`.trim()} {...rest} />
);

export type FooterBottomProps = React.HTMLAttributes<HTMLDivElement>;
export const FooterBottom: React.FC<FooterBottomProps> = ({
    children,
    className = '',
    ...rest
}) => (
    <div className={`pgs-footer-bottom ${className}`.trim()} {...rest}>
        {children}
    </div>
);
