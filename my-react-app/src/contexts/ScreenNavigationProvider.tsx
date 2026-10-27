import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { ScreenId } from '../types/ScreenId';
import {
  ScreenNavigationContext,
  type ScreenNavigationContextValue,
} from './ScreenNavigationContext';

type ScreenNavigationProviderProps = {
  children: ReactNode;
};

function ScreenNavigationProvider({ children }: ScreenNavigationProviderProps) {
  const [screenHistory, setScreenHistory] = useState<ScreenId[]>([
    ScreenId.GAME_TITLE,
  ]);

  const currentScreen = screenHistory[screenHistory.length - 1];

  const navigate = useCallback((screenId: ScreenId) => {
    setScreenHistory((previousHistory) => {
      const previousScreen = previousHistory[previousHistory.length - 1];

      /*
       * 現在と同じ画面を履歴へ重複して追加しない。
       */
      if (previousScreen === screenId) {
        return previousHistory;
      }

      return [...previousHistory, screenId];
    });
  }, []);

  const goBack = useCallback(() => {
    setScreenHistory((previousHistory) => {
      /*
       * 最初の画面より前には戻さない。
       */
      if (previousHistory.length <= 1) {
        return previousHistory;
      }

      return previousHistory.slice(0, -1);
    });
  }, []);

  const contextValue = useMemo<ScreenNavigationContextValue>(
    () => ({
      currentScreen,
      canGoBack: screenHistory.length > 1,
      navigate,
      goBack,
    }),
    [currentScreen, screenHistory.length, navigate, goBack],
  );

  return (
    <ScreenNavigationContext value={contextValue}>
      {children}
    </ScreenNavigationContext>
  );
}

export default ScreenNavigationProvider;
