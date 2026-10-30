import ButtonWithIcon from './ButtonWithIcon';
import { starIcon } from '../../../../asset_path_reference/images/button_icons';

type StarButtonProps = {
  onClick: () => void;
};

export function StarButton({ onClick }: StarButtonProps) {
  return (
    <ButtonWithIcon
      iconSrc={starIcon}
      ariaLabel="タイトル画面に戻る"
      onClick={onClick}
    />
  );
}
