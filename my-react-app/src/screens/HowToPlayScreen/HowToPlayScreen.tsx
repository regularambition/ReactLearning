import { useState } from 'react';
import SidebarScreenLayout from '../../components/layout/SidebarScreenLayout';
import { Card } from '../../types/Cards';
import CardEffectPage from './components/CardEffectPage';
import CardMatchupPage from './components/CardMatchupPage';

type FinishingPair = {
  winner: Card;
  loser: Card;
};

const fp: Array<FinishingPair> = [
  { winner: Card.SUN, loser: Card.PLANET },
  { winner: Card.SUNGLASS, loser: Card.PLANET },
  { winner: Card.SUNGLASS, loser: Card.SUN },
];

const cardDescriptions = new Map<Card, string>([
  [Card.PLANET, '惑星カードの効果説明をここに記載します。'],
  [Card.RAINBOW, '虹カードの効果説明をここに記載します。'],
  [Card.SUN, '太陽カードの効果説明をここに記載します。'],
  [Card.SUNGLASS, 'サングラスカードの効果説明をここに記載します。'],
]);

type CardEffectPageDefinition = {
  type: 'cardEffect';
  card: Card;
  description: string;
};

type CardMatchupPageDefinition = {
  type: 'cardMatchup';
  winner: Card;
  loser: Card;
};

type HowToPlayPageDefinition =
  CardEffectPageDefinition | CardMatchupPageDefinition;

const howToPlayPages: ReadonlyArray<HowToPlayPageDefinition> = [
  ...Object.values(Card).map<CardEffectPageDefinition>((card) => ({
    type: 'cardEffect',
    card,
    description: cardDescriptions.get(card) ?? '',
  })),
  ...fp.map<CardMatchupPageDefinition>(({ winner, loser }) => ({
    type: 'cardMatchup',
    winner,
    loser,
  })),
];

function HowToPlayScreen() {
  // 配列内では0始まり、画面表示では1始まりとして扱う。
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const currentPageDefinition = howToPlayPages[currentPageIndex];
  const currentPage = currentPageIndex + 1;
  const totalPages = howToPlayPages.length;

  const goToPreviousPage = () => {
    setCurrentPageIndex((pageIndex) => Math.max(0, pageIndex - 1));
  };

  const goToNextPage = () => {
    setCurrentPageIndex((pageIndex) => Math.min(totalPages - 1, pageIndex + 1));
  };

  const pagingProps = {
    currentPage,
    totalPages,
    onPreviousPage: goToPreviousPage,
    onNextPage: goToNextPage,
  };

  return (
    <SidebarScreenLayout>
      {currentPageDefinition.type === 'cardEffect' ? (
        <CardEffectPage
          cardName={currentPageDefinition.card.name}
          iconSrc={currentPageDefinition.card.iconPath}
          description={currentPageDefinition.description}
          {...pagingProps}
        />
      ) : (
        <CardMatchupPage
          winnerIconSrc={currentPageDefinition.winner.iconPath}
          winnerName={currentPageDefinition.winner.name}
          loserIconSrc={currentPageDefinition.loser.iconPath}
          loserName={currentPageDefinition.loser.name}
          {...pagingProps}
        />
      )}
    </SidebarScreenLayout>
  );
}

export default HowToPlayScreen;
