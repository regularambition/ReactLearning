import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ScreenNavigationProvider from './contexts/ScreenNavigationProvider';
import UserProvider from './contexts/UserProvider';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <ScreenNavigationProvider>
        <App />
      </ScreenNavigationProvider>
    </UserProvider>
  </StrictMode>,
);
