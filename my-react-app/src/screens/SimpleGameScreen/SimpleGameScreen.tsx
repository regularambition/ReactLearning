import { useEffect, useRef, useState } from 'react';
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

type GameState = {
  phase: PhaseOfGame;
  opponentScore: number;
  playerScore: number;
  opponentAction: number;
  playerAction: number;
};

const SELECTING_SECONDS = 10;
const RESULT_SECONDS = 3;

function didOpponentWin(opponentAction: number, playerAction: number) {
  return opponentAction === playerAction;
}

function startResult(game: GameState, playerAction: number): GameState {
  return {
    ...game,
    phase: PhaseOfGame.RESULT,
    playerAction,
    opponentAction: getRandomInt(2),
  };
}

function startNextRound(game: GameState): GameState {
  const opponentWon = didOpponentWin(game.opponentAction, game.playerAction);

  return {
    ...game,
    phase: PhaseOfGame.SELECTING,
    opponentScore: game.opponentScore + (opponentWon ? 1 : 0),
    playerScore: game.playerScore + (opponentWon ? 0 : 1),
  };
}

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
        <p>{`${didOpponentWin(opponentAction, playerAction) ? '相手' : 'あなた'}の勝利`}</p>
      </div>
    </div>
  );
}

function getRandomInt(ub: number) {
  return Math.floor(Math.random() * ub);
}

function SimpleGameScreen() {
  const [game, setGame] = useState<GameState>({
    phase: PhaseOfGame.SELECTING,
    opponentScore: 0,
    playerScore: 0,
    opponentAction: 0,
    playerAction: 0,
  });

  const [countdown, setCountdown] = useState<{
    game: GameState;
    seconds: number;
  } | null>(null);

  const deadlineRef = useRef<{
    game: GameState;
    time: number;
  } | null>(null);

  const { phase, opponentScore, playerScore, opponentAction, playerAction } =
    game;

  const duration =
    phase === PhaseOfGame.SELECTING ? SELECTING_SECONDS : RESULT_SECONDS;

  const remainingSec = countdown?.game === game ? countdown.seconds : duration;

  const handleSelectingAction = (action: number) => {
    const deadline = deadlineRef.current;
    const expired =
      deadline?.game === game && performance.now() >= deadline.time;

    const nextGame = startResult(game, expired ? game.playerAction : action);
    setGame((current) => (current === game ? nextGame : current));
  };

  useEffect(() => {
    const deadline = performance.now() + duration * 1000;
    deadlineRef.current = { game, time: deadline };

    const intervalId = window.setInterval(() => {
      const millisecondsLeft = Math.max(0, deadline - performance.now());

      setCountdown({
        game,
        seconds: Math.ceil(millisecondsLeft / 1000),
      });
    }, 100);

    const timeoutId = window.setTimeout(() => {
      const nextGame =
        game.phase === PhaseOfGame.SELECTING
          ? startResult(game, game.playerAction)
          : startNextRound(game);

      setGame((current) => (current === game ? nextGame : current));
    }, duration * 1000);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [game, duration]);

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
                remainingSec={remainingSec}
                onSelectA={() => handleSelectingAction(0)}
                onSelectB={() => handleSelectingAction(1)}
              ></SelectingPanel>
            ) : (
              <ResultPanel
                waitingSec={remainingSec}
                opponentAction={opponentAction}
                playerAction={playerAction}
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
