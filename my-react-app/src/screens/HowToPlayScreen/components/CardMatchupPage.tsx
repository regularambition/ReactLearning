import HowToPlayPageLayout, {
  type HowToPlayPagingProps,
} from './HowToPlayPageLayout';
import './CardMatchupPage.css';

type CardMatchupPageProps = HowToPlayPagingProps & {
  pageNo: number;
  winnerIconSrc: string;
  winnerName: string;
  loserIconSrc: string;
  loserName: string;
};

function CardMatchupPage({
  pageNo,
  winnerIconSrc,
  winnerName,
  loserIconSrc,
  loserName,
  ...pagingProps
}: CardMatchupPageProps) {
  return (
    <HowToPlayPageLayout
      title={`勝敗が決まる組み合わせ${pageNo}(左右はそれぞれ勝ち・負け)`}
      {...pagingProps}
    >
      <div className="card-matchup-page">
        <img
          className="card-matchup-page__icon"
          src={winnerIconSrc}
          alt={`${winnerName}（勝ち）`}
        />
        <img
          className="card-matchup-page__icon"
          src={loserIconSrc}
          alt={`${loserName}（負け）`}
        />
      </div>
    </HowToPlayPageLayout>
  );
}

export default CardMatchupPage;
