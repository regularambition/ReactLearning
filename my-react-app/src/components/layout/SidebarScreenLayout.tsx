import type { ReactNode } from 'react';
import { useUser } from '../../contexts/UserContext';
import './SidebarScreenLayout.css';

type SidebarScreenLayoutProps = {
  screenTitle: string;
  sidebar: ReactNode;
  children: ReactNode;
  sidebarAriaLabel?: string;
};

function SidebarScreenLayout({
  screenTitle,
  sidebar,
  children,
  sidebarAriaLabel = `${screenTitle}の操作メニュー`,
}: SidebarScreenLayoutProps) {
  const { userName } = useUser();

  return (
    <div className="sidebar-screen-layout">
      <nav
        className="sidebar-screen-layout__sidebar"
        aria-label={sidebarAriaLabel}
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
