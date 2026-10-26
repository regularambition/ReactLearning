import { BackArrowButton } from '../../components/ui/buttons/ButtonWithIcon/BackArrowButton';
import { useUser } from '../../contexts/UserContext';
import { getScreenTitle, type ScreenId } from '../../types/ScreenId';
import './MainMenuScreen.css';

type MainMenuScreenProps = {
  screenId: ScreenId;
};

function MainMenuScreen({ screenId }: MainMenuScreenProps) {
  const { userName } = useUser();

  const screenTitle = getScreenTitle(screenId);

  return (
    <div className="main-menu-screen">
      <nav className="main-menu-screen__menu" aria-label={screenTitle}>
        <BackArrowButton onClick={() => alert('戻るボタンを押したね')} />
      </nav>

      <div className="main-menu-screen__user-name">
        <h6>{userName}</h6>
      </div>

      <header className="main-menu-screen__title">
        <h6>{screenTitle}</h6>
      </header>

      <div className="main-menu-screen__content">
        {/* 主要部分の要素を配置する */}
      </div>
    </div>
  );
}

export default MainMenuScreen;
