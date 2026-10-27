import ScreenLayout from './components/layout/ScreenLayout';
import GameTitleScreen from './screens/GameTitleScreen/GameTitleScreen';
import MainMenuScreen from './screens/MainMenuScreen/MainMenuScreen';
import { getScreenTitle, ScreenId } from './types/ScreenId';
import { useScreenNavigation } from './contexts/ScreenNavigationContext';

function App() {
  const { currentScreen, navigate } = useScreenNavigation();

  const isGameTitleScreen = currentScreen === ScreenId.GAME_TITLE;

  return (
    <ScreenLayout
      onActivate={
        isGameTitleScreen ? () => navigate(ScreenId.MAIN_MENU) : undefined
      }
      activationLabel={
        isGameTitleScreen
          ? `${getScreenTitle(ScreenId.MAIN_MENU)}画面へ移動`
          : undefined
      }
    >
      {isGameTitleScreen ? (
        <GameTitleScreen />
      ) : (
        <MainMenuScreen screenId={currentScreen} />
      )}
    </ScreenLayout>
  );
}

export default App;
