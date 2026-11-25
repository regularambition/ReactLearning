import type { ReactNode } from 'react';
import { useUser } from '../../contexts/UserContext';
import { getScreenTitle } from '../../types/ScreenId';
import './SidebarScreenLayout.css';
import { useScreenNavigation } from '../../contexts/ScreenNavigationContext';
import { BackArrowButton } from '../ui/buttons/ButtonWithIcon/BackArrowButton';
import { StarButton } from '../ui/buttons/ButtonWithIcon/StarButton';

type SidebarScreenLayoutProps = {
  children: ReactNode;
  onBack?: () => void;
  showHeader?: boolean;
};

function SidebarScreenLayout({
  children,
  onBack,
  showHeader = true,
}: SidebarScreenLayoutProps) {
  const { userName } = useUser();
  const { canGoBack, goBack } = useScreenNavigation();
  const screenTitle = getScreenTitle(useScreenNavigation().currentScreen);

  return (
    <div
      className={`sidebar-screen-layout${showHeader ? '' : ' sidebar-screen-layout--no-header'}`}
    >
      <nav
        className="sidebar-screen-layout__sidebar"
        aria-label={`${screenTitle}の操作メニュー`}
      >
        {canGoBack && <BackArrowButton onClick={onBack ?? goBack} />}
        <StarButton onClick={() => alert('★ボタン')} />
      </nav>

      {showHeader && (
        <>
          <div className="sidebar-screen-layout__user-name">
            <h6>{userName}</h6>
          </div>
          <header className="sidebar-screen-layout__title">
            <h6>{screenTitle}</h6>
          </header>
        </>
      )}

      <div className="sidebar-screen-layout__content">{children}</div>
    </div>
  );
}

export default SidebarScreenLayout;
