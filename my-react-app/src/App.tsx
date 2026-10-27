import ScreenLayout from './components/layout/ScreenLayout';
import GameTitleScreen from './screens/GameTitleScreen/GameTitleScreen';
import MenuTopScreen from './screens/MenuTopScreen/MenuTopScreen';
import { getScreenTitle, ScreenId } from './types/ScreenId';
import { useScreenNavigation } from './contexts/ScreenNavigationContext';

function App() {
  const { currentScreen, navigate } = useScreenNavigation();

  const isGameTitleScreen = currentScreen === ScreenId.GAME_TITLE;

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
      {isGameTitleScreen ? (
        <GameTitleScreen />
      ) : (
        <MenuTopScreen screenId={currentScreen} />
      )}
    </ScreenLayout>
  );
}

export default App;
