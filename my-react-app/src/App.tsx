import ScreenLayout from './components/layout/ScreenLayout';
import GameTitleScreen from './screens/GameTitleScreen/GameTitleScreen';
import MenuTopScreen from './screens/MenuTopScreen/MenuTopScreen';
import UserNameUpdateScreen from './screens/UserNameUpdateScreen/UserNameUpdateScreen';
import { getScreenTitle, ScreenId } from './types/ScreenId';
import { useScreenNavigation } from './contexts/ScreenNavigationContext';
import HowToPlayScreen from './screens/HowToPlayScreen/HowToPlayScreen';

function App() {
  const { currentScreen, navigate } = useScreenNavigation();

  const isGameTitleScreen = currentScreen === ScreenId.GAME_TITLE;

  const getRenderedScreen = () => {
    if (currentScreen === ScreenId.GAME_TITLE) {
      return <GameTitleScreen />;
    }
    if (currentScreen === ScreenId.MENU_TOP) {
      return <MenuTopScreen />;
    }
    if (currentScreen === ScreenId.USER_NAME_UPDATE) {
      return <UserNameUpdateScreen />;
    }

    return <HowToPlayScreen />;
  };

  return (
    <ScreenLayout
      onActivate={
        isGameTitleScreen ? () => navigate(ScreenId.MENU_TOP) : undefined
      }
      activationLabel={
        isGameTitleScreen
          ? `${getScreenTitle(ScreenId.MENU_TOP)}画面へ移動`
          : undefined
      }
    >
      {getRenderedScreen()}
    </ScreenLayout>
  );
}

export default App;
