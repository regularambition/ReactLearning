import { useState, type ReactNode } from 'react';
import { UserContext } from './UserContext';

type UserProviderProps = {
  children: ReactNode;
};

function UserProvider({ children }: UserProviderProps) {
  const [userName, setUserName] = useState('ユーザー名');

  return (
    <UserContext value={{ userName, setUserName }}>{children}</UserContext>
  );
}

export default UserProvider;
