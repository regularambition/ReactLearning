import { createContext, useContext } from 'react';
import type { ScreenId } from '../types/ScreenId';

export type ScreenNavigationContextValue = {
  currentScreen: ScreenId;
  canGoBack: boolean;
  navigate: (screenId: ScreenId) => void;
  goBack: () => void;
};

export const ScreenNavigationContext = createContext<
  ScreenNavigationContextValue | undefined
>(undefined);

export function useScreenNavigation() {
  const context = useContext(ScreenNavigationContext);

  if (context === undefined) {
    throw new Error(
      'useScreenNavigationはScreenNavigationProviderの内側で使用してください',
    );
  }

  return context;
}
