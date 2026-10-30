import ButtonWithIcon from './ButtonWithIcon';
import { backArrowIcon } from '../../../../asset_path_reference/images/button_icons';

type BackArrowButtonProps = {
  onClick: () => void;
};

export function BackArrowButton({ onClick }: BackArrowButtonProps) {
  return (
    <ButtonWithIcon
      iconSrc={backArrowIcon}
      ariaLabel="前の画面に戻る"
      onClick={onClick}
    />
  );
}
