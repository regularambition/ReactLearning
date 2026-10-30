import HowToPlayPageLayout, {
  type HowToPlayPagingProps,
} from './HowToPlayPageLayout';
import './CardEffectPage.css';

type CardEffectPageProps = HowToPlayPagingProps & {
  cardName: string;
  iconSrc: string;
  description: string;
};

function CardEffectPage({
  cardName,
  iconSrc,
  description,
  ...pagingProps
}: CardEffectPageProps) {
  return (
    <HowToPlayPageLayout title={cardName} {...pagingProps}>
      <div className="card-effect-page">
        <div className="card-effect-page__icon-area">
          <img className="card-effect-page__icon" src={iconSrc} alt="" />
        </div>

        <p className="card-effect-page__description">{description}</p>
      </div>
    </HowToPlayPageLayout>
  );
}

export default CardEffectPage;
