import ButtonWithIcon from './ButtonWithIcon';
import { pagingForwardIcon } from '../../../../asset_path_reference/images/button_icons';

type PagingForwardButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

export function PagingForwardButton({
  onClick,
  disabled,
}: PagingForwardButtonProps) {
  return (
    <ButtonWithIcon
      iconSrc={pagingForwardIcon}
      ariaLabel="次のページへ"
      onClick={onClick}
      disabled={disabled}
    />
  );
}
