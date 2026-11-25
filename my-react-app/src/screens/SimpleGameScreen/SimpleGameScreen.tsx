import type { ReactNode } from 'react';
import SidebarScreenLayout from '../../components/layout/SidebarScreenLayout';
import './SimpleGameScreen.css';

type SimpleGameScreenProps = {
  opponentScore: number;
  playerScore: number;
  children: ReactNode;
};

function SimpleGameScreen({
  opponentScore,
  playerScore,
  children,
}: SimpleGameScreenProps) {
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
          <div className="simple-game-screen__play-content">{children}</div>
        </section>

        <div className="simple-game-screen__score simple-game-screen__score--player">
          あなたの点数：{playerScore}
        </div>
      </div>
    </SidebarScreenLayout>
  );
}

export default SimpleGameScreen;
