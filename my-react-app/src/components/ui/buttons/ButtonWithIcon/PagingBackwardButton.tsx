import ButtonWithIcon from './ButtonWithIcon';
import { pagingBackwardIcon } from '../../../../asset_path_reference/images/button_icons';

type PagingBackwardButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

export function PagingBackwardButton({
  onClick,
  disabled,
}: PagingBackwardButtonProps) {
  return (
    <ButtonWithIcon
      iconSrc={pagingBackwardIcon}
      ariaLabel="前のページへ"
      onClick={onClick}
      disabled={disabled}
    />
  );
}
