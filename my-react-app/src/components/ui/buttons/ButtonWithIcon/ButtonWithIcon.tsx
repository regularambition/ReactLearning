import type { ButtonHTMLAttributes } from 'react';
import './ButtonWithIcon.css';

type ButtonWithIconProps = {
  iconSrc: string;
  ariaLabel: string;
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'aria-label' | 'className'
>;

function ButtonWithIcon({
  iconSrc,
  ariaLabel,
  type = 'button',
  ...buttonProps
}: ButtonWithIconProps) {
  return (
    <button
      {...buttonProps}
      className="button-with-icon"
      type={type}
      aria-label={ariaLabel}
    >
      <img
        className="button-with-icon__image"
        src={iconSrc}
        alt=""
        draggable={false}
      />
    </button>
  );
}

export default ButtonWithIcon;
