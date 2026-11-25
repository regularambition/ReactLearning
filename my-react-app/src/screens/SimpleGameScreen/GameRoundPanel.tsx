import PlainButton from '../../components/ui/buttons/PlainButton/PlainButton';
import PlainButtonPair from '../../components/ui/buttons/PlainButtonPair/PlainButtonPair';
import './GameRoundPanel.css';

export type GameAction = 'A' | 'B';

type GameRoundPanelProps =
  | {
      phase: 'selecting';
      remaining: number;
      onSelect: (action: GameAction) => void;
    }
  | {
      phase: 'result';
      waiting: number;
      opponentAction: GameAction;
      playerAction: GameAction;
      result: string;
    };

function GameRoundPanel(props: GameRoundPanelProps) {
  if (props.phase === 'selecting') {
    const { remaining, onSelect } = props;

    return (
      <div className="game-round-panel game-round-panel--selecting">
        <p className="game-round-panel__timer">残り選択時間：{remaining}秒</p>

        <h2 className="game-round-panel__heading">行動を選択</h2>

        <div className="game-round-panel__actions">
          <PlainButtonPair>
            <PlainButton onClick={() => onSelect('A')}>行動A</PlainButton>
            <PlainButton onClick={() => onSelect('B')}>行動B</PlainButton>
          </PlainButtonPair>
        </div>
      </div>
    );
  }

  const { waiting, opponentAction, playerAction, result } = props;

  return (
    <div className="game-round-panel game-round-panel--result">
      <p className="game-round-panel__timer">
        次のラウンドまで残り：{waiting}秒
      </p>

      <div className="game-round-panel__summary">
        <div>
          <p>相手の選択：行動{opponentAction}</p>
          <p>あなたの選択：行動{playerAction}</p>
        </div>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default GameRoundPanel;
