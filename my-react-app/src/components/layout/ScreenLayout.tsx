import type { ReactNode } from 'react';
import './ScreenLayout.css';

type ScreenLayoutProps = {
  children: ReactNode;
};

/**
 * 各種CSS項目が設定された画面の基本レイアウトが返される
 * いちいちmainタグにclassNameを指定する必要がなくなって嬉しい
 */
function ScreenLayout({ children }: ScreenLayoutProps) {
  return <main className="screen-layout">{children}</main>;
}

export default ScreenLayout;
