import React, { createContext, useContext, useState } from 'react';
import { Size, Variant } from '../../utils/types';

type MenuContextValue = {
    activeKey: string | undefined;
    setActiveKey: (key: string) => void;
    variant: Variant;
};

const MenuContext = createContext<MenuContextValue>({
    activeKey: undefined,
    setActiveKey: () => {},
    variant: 'primary',
});

export type MenuProps = Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> & {
    size?: Size;
    variant?: Variant;
    activeKey?: string;
    defaultActiveKey?: string;
    onChange?: (key: string) => void;
};

export const Menu: React.FC<MenuProps> = ({
    children,
    className = '',
    size = 'large',
    variant = 'primary',
    activeKey: activeKeyProp,
    defaultActiveKey,
    onChange,
    ...rest
}) => {
    const [internalKey, setInternalKey] = useState<string | undefined>(defaultActiveKey);

    const activeKey = activeKeyProp ?? internalKey;

    const setActiveKey = (key: string) => {
        if (!activeKeyProp) setInternalKey(key);
        onChange?.(key);
    };

    const cls = `pgs-menu menu-size-${size} ${className}`.trim();

    return (
        <MenuContext.Provider value={{ activeKey, setActiveKey, variant }}>
            <nav className={cls} {...rest}>
                <ul role="menubar">
                    {children}
                </ul>
            </nav>
        </MenuContext.Provider>
    );
};

export type MenuItemProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'> & {
    variant?: 'primary' | 'secondary' | 'success';
    value: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({
    children,
    className = '',
    value,
    disabled = false,
    onClick,
    variant = 'primary',
    ...rest
}) => {
    const { activeKey, setActiveKey } = useContext(MenuContext);
    const isActive = activeKey === value;

    const cls = [
        `pgs-menu-item menu-item-variant-${variant}`,
        isActive ? 'menu-item-active' : '',
        className,
    ].filter(Boolean).join(' ');

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!disabled) setActiveKey(value);
        onClick?.(e);
    };

    return (
        <li role="none">
            <button role="menuitem" className={cls} disabled={disabled} onClick={handleClick} {...rest}>
                {children}
            </button>
        </li>
    );
};

export type MenuSeparatorProps = React.HTMLAttributes<HTMLLIElement>;

export const MenuSeparator: React.FC<MenuSeparatorProps> = ({ className = '', ...rest }) => (
    <li role="separator" className={`pgs-menu-separator ${className}`.trim()} {...rest} />
);

export type MenuLabelProps = React.HTMLAttributes<HTMLLIElement>;

export const MenuLabel: React.FC<MenuLabelProps> = ({ children, className = '', ...rest }) => (
    <li className={`pgs-menu-label ${className}`.trim()} {...rest}>{children}</li>
);
