import { useId, type ReactNode } from 'react';
import PagingControls from '../../../components/ui/navigation/PagingControls/PagingControls';
import './HowToPlayPageLayout.css';

export type HowToPlayPagingProps = {
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
};

type HowToPlayPageLayoutProps = HowToPlayPagingProps & {
  title: string;
  children: ReactNode;
};

function HowToPlayPageLayout({
  title,
  children,
  currentPage,
  totalPages,
  onPreviousPage,
  onNextPage,
}: HowToPlayPageLayoutProps) {
  const titleId = useId();

  return (
    <section className="how-to-play-page-layout" aria-labelledby={titleId}>
      <h2 id={titleId} className="how-to-play-page-layout__title">
        {title}
      </h2>

      <div className="how-to-play-page-layout__content">{children}</div>

      <PagingControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
      />
    </section>
  );
}

export default HowToPlayPageLayout;
