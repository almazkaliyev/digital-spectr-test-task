import React from 'react';

import classNames from 'classnames';

type IconButtonColor = 'primary' | 'secondary';

export interface IconButtonProps {
  children: React.ReactElement;
  color?: IconButtonColor;
  disabled?: boolean;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  color,
  disabled,
  onClick,
}): React.ReactElement => (
  <button
    className={classNames(
      'button-base',
      'icon-button',
      [color && `icon-button--${color}`],
      [disabled && `icon-button--disabled`]
    )}
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);
