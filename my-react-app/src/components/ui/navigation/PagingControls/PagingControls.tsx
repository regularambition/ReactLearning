import { PagingBackwardButton } from '../../buttons/ButtonWithIcon/PagingBackwardButton';
import { PagingForwardButton } from '../../buttons/ButtonWithIcon/PagingForwardButton';
import './PagingControls.css';

type PagingControlsProps = {
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
};

function PagingControls({
  currentPage,
  totalPages,
  onPreviousPage,
  onNextPage,
}: PagingControlsProps) {
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  return (
    <nav className="paging-controls" aria-label="ページ操作">
      <PagingBackwardButton onClick={onPreviousPage} disabled={isFirstPage} />

      <span
        className="paging-controls__page-number"
        aria-live="polite"
        aria-atomic="true"
      >
        {currentPage} / {totalPages}
      </span>

      <PagingForwardButton onClick={onNextPage} disabled={isLastPage} />
    </nav>
  );
}

export default PagingControls;
