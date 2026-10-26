import type { KeyboardEvent, ReactNode } from 'react';
import './ScreenLayout.css';

type ScreenLayoutProps = {
  children: ReactNode;
  onActivate?: () => void;
  activationLabel?: string;
};

/**
 * 各種CSS項目が設定された画面の基本レイアウトが返される
 * いちいちmainタグにclassNameを指定する必要がなくなって嬉しい
 */
function ScreenLayout({
  children,
  onActivate,
  activationLabel,
}: ScreenLayoutProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (onActivate && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onActivate();
    }
  };

  return (
    <main
      className={`screen-layout${onActivate ? ' screen-layout--clickable' : ''}`}
      onClick={onActivate}
      onKeyDown={handleKeyDown}
      // ↓↓↓ 支援技術向けのプロパティ ↓↓↓
      role={onActivate ? 'button' : undefined} // ボタンとして機能することを支援技術に伝達
      tabIndex={onActivate ? 0 : undefined} // Tabキーを押した時にフォーカス可能にする
      aria-label={onActivate ? activationLabel : undefined} // スクリーンリーダーが読み上げるための名前
      // ↑↑↑ 支援技術向けのプロパティ ↑↑↑
    >
      {children}
    </main>
  );
}

export default ScreenLayout;
