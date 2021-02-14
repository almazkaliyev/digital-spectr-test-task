import React from 'react';

import classNames from 'classnames';

type ButtonColor = 'primary' | 'secondary' | 'default';

interface ButtonProps {
  color?: ButtonColor;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  disabled?: boolean;
  children: string;
}

const Button: React.FC<ButtonProps> = ({
  color = 'default',
  onClick,
  disabled,
  children,
}): React.ReactElement => (
  <button
    className={classNames('button', [color && `button--${color}`])}
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

export default Button;
