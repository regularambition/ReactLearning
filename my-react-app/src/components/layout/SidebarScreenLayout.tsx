import type { ReactNode } from 'react';
import { useUser } from '../../contexts/UserContext';
import { getScreenTitle, type ScreenId } from '../../types/ScreenId';
import './SidebarScreenLayout.css';

type SidebarScreenLayoutProps = {
  screenId: ScreenId;
  sidebar: ReactNode;
  children: ReactNode;
  sidebarAriaLabel?: string;
};

function SidebarScreenLayout({
  screenId,
  sidebar,
  children,
}: SidebarScreenLayoutProps) {
  const { userName } = useUser();
  const screenTitle = getScreenTitle(screenId);

  return (
    <div className="sidebar-screen-layout">
      <nav
        className="sidebar-screen-layout__sidebar"
        aria-label={`${screenTitle}の操作メニュー`}
      >
        {sidebar}
      </nav>

      <div className="sidebar-screen-layout__user-name">
        <h6>{userName}</h6>
      </div>

      <header className="sidebar-screen-layout__title">
        <h6>{screenTitle}</h6>
      </header>

      <div className="sidebar-screen-layout__content">{children}</div>
    </div>
  );
}

export default SidebarScreenLayout;
