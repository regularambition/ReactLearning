import './ButtonWithIcon';
import ButtonWithIcon from './ButtonWithIcon';
import star from '../../../../assets/images/button_icons/star.png';

type StarButtonProps = {
  onClick: () => void;
};

export function StarButton({ onClick }: StarButtonProps) {
  return (
    <ButtonWithIcon
      iconSrc={star}
      ariaLabel="タイトル画面に戻る"
      onClick={onClick}
    />
  );
}
