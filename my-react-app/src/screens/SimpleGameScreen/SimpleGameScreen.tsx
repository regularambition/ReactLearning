import { useState } from 'react';
import SidebarScreenLayout from '../../components/layout/SidebarScreenLayout';
import './SimpleGameScreen.css';
import PlainButton from '../../components/ui/buttons/PlainButton/PlainButton';
import PlainButtonPair from '../../components/ui/buttons/PlainButtonPair/PlainButtonPair';
import './GameRoundPanel.css';

const PhaseOfGame = {
  SELECTING: 0,
  RESULT: 1,
} as const;

type PhaseOfGame = (typeof PhaseOfGame)[keyof typeof PhaseOfGame];

type SelectingPanelProps = {
  remainingSec: number;
  onSelectA: () => void;
  onSelectB: () => void;
};

function SelectingPanel({
  remainingSec,
  onSelectA,
  onSelectB,
}: SelectingPanelProps) {
  return (
    <div className="game-round-panel game-round-panel--selecting">
      <p className="game-round-panel__timer">残り選択時間：{remainingSec}秒</p>

      <h2 className="game-round-panel__heading">行動を選択</h2>

      <div className="game-round-panel__actions">
        <PlainButtonPair>
          <PlainButton onClick={onSelectA}>行動A</PlainButton>
          <PlainButton onClick={onSelectB}>行動B</PlainButton>
        </PlainButtonPair>
      </div>
    </div>
  );
}

type ResultPanelProps = {
  waitingSec: number;
  opponentAction: number;
  playerAction: number;
};

function ResultPanel({
  waitingSec,
  opponentAction,
  playerAction,
}: ResultPanelProps) {
  return (
    <div className="game-round-panel game-round-panel--result">
      <p className="game-round-panel__timer">
        次のラウンドまで残り：{waitingSec}秒
      </p>

      <div className="game-round-panel__summary">
        <div>
          <p>相手の選択：行動{opponentAction}</p>
          <p>あなたの選択：行動{playerAction}</p>
        </div>
        <p>{`${opponentAction === playerAction ? '相手' : 'あなた'}の勝利`}</p>
      </div>
    </div>
  );
}

function SimpleGameScreen() {
  const [phase, setPhase] = useState<PhaseOfGame>(PhaseOfGame.SELECTING);
  const [opponentScore, setOpponentScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(3);

  return (
    <SidebarScreenLayout showHeader={false}>
      <div className="simple-game-screen">
        <div className="simple-game-screen__score simple-game-screen__score--opponent">
          相手の点数：{opponentScore}
        </div>

        <section
          className="simple-game-screen__play-area"
          aria-label="ゲームの操作と結果"
        >
          <div className="simple-game-screen__play-content">
            {phase === PhaseOfGame.SELECTING ? (
              <SelectingPanel
                remainingSec={10}
                onSelectA={() => alert('Aを選択')}
                onSelectB={() => setPhase(PhaseOfGame.RESULT)}
              ></SelectingPanel>
            ) : (
              <ResultPanel
                waitingSec={3}
                opponentAction={0}
                playerAction={1}
              ></ResultPanel>
            )}
          </div>
        </section>

        <div className="simple-game-screen__score simple-game-screen__score--player">
          あなたの点数：{playerScore}
        </div>
      </div>
    </SidebarScreenLayout>
  );
}

export default SimpleGameScreen;
