import './ButtonWithIcon';
import ButtonWithIcon from './ButtonWithIcon';
import backArrow from '../../../../assets/images/button_icons/backArrow.png';

type BackArrowButtonProps = {
  onClick: () => void;
};

export function BackArrowButton({ onClick }: BackArrowButtonProps) {
  return (
    <ButtonWithIcon
      iconSrc={backArrow}
      ariaLabel="前の画面に戻る"
      onClick={onClick}
    />
  );
}
