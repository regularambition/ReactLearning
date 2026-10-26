import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from 'react';

export type UserContextValue = {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
};

export const UserContext = createContext<UserContextValue | undefined>(
  undefined,
);

export function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserはUserProviderの内側で使用してください');
  }

  return context;
}
