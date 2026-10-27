import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './PlainButton.css';

type PlainButtonProps = {
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'>;

function PlainButton({
  children,
  type = 'button',
  ...buttonProps
}: PlainButtonProps) {
  return (
    <button {...buttonProps} className="plain-button" type={type}>
      {children}
    </button>
  );
}

export default PlainButton;
