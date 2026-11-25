import { useState } from 'react';
import SidebarScreenLayout from '../../components/layout/SidebarScreenLayout';
import { Card } from '../../types/Cards';
import CardEffectPage from './components/CardEffectPage';
import CardMatchupPage from './components/CardMatchupPage';
import BasicRulePage from './components/BasicRulePage';

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

const SectionType = {
  BASIC_RULE: 0,
  CARD_EFFECT: 1,
  CARD_MATCHUP: 2,
} as const;

type SectionType = (typeof SectionType)[keyof typeof SectionType];

type CardEffectPageDefinition = {
  type: typeof SectionType.CARD_EFFECT;
  card: Card;
  description: string;
};

type CardMatchupPageDefinition = {
  type: typeof SectionType.CARD_MATCHUP;
  winner: Card;
  loser: Card;
};

type BasicRulePageDefinition = {
  type: typeof SectionType.BASIC_RULE;
  rules: readonly string[];
};

type HowToPlayPageDefinition =
  | CardEffectPageDefinition
  | CardMatchupPageDefinition
  | BasicRulePageDefinition;

const basicRulePages: ReadonlyArray<BasicRulePageDefinition> = [
  {
    type: SectionType.BASIC_RULE,
    rules: ['ルール説明1', 'ルール説明2'],
  },
  {
    type: SectionType.BASIC_RULE,
    rules: ['ルール説明3', 'ルール説明4'],
  },
];

const howToPlayPages: ReadonlyArray<HowToPlayPageDefinition> = [
  ...basicRulePages,
  ...Object.values(Card).map<CardEffectPageDefinition>((card) => ({
    type: SectionType.CARD_EFFECT,
    card,
    description: cardDescriptions.get(card) ?? '',
  })),
  ...fp.map<CardMatchupPageDefinition>(({ winner, loser }) => ({
    type: SectionType.CARD_MATCHUP,
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
      {currentPageDefinition.type === SectionType.BASIC_RULE ? (
        <BasicRulePage
          pageNo={currentPageIndex + 1}
          rules={currentPageDefinition.rules}
          {...pagingProps}
        />
      ) : currentPageDefinition.type === SectionType.CARD_EFFECT ? (
        <CardEffectPage
          cardName={currentPageDefinition.card.name}
          iconSrc={currentPageDefinition.card.iconPath}
          description={currentPageDefinition.description}
          {...pagingProps}
        />
      ) : (
        <CardMatchupPage
          pageNo={
            currentPageIndex -
            (basicRulePages.length + cardDescriptions.size) +
            1
          }
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
