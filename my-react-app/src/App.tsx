import ScreenLayout from './components/layout/ScreenLayout';
import FirstScreen from './screens/FirstScreen/FirstScreen';
import MainMenuScreen from './screens/MainMenuScreen/MainMenuScreen';
import { ScreenId } from './types/ScreenId';
import { useScreenNavigation } from './contexts/ScreenNavigationContext';

function App() {
  const { currentScreen, navigate } = useScreenNavigation();

  const isFirstScreen = currentScreen === ScreenId.FIRST;

  return (
    <ScreenLayout
      onActivate={
        isFirstScreen ? () => navigate(ScreenId.MAIN_MENU) : undefined
      }
      activationLabel={isFirstScreen ? 'メインメニュー画面へ移動' : undefined}
    >
      {isFirstScreen ? (
        <FirstScreen />
      ) : (
        <MainMenuScreen screenId={currentScreen} />
      )}
    </ScreenLayout>
  );
}

export default App;
