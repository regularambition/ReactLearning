import { useState } from 'react';
import ConfirmationDialog from '../../components/ui/dialogs/ConfirmationDialog/ConfirmationDialog';
import SidebarScreenLayout from '../../components/layout/SidebarScreenLayout';
import PlainButton from '../../components/ui/buttons/PlainButton/PlainButton';
import PlainButtonPair from '../../components/ui/buttons/PlainButtonPair/PlainButtonPair';
import { useScreenNavigation } from '../../contexts/ScreenNavigationContext';
import { ScreenId } from '../../types/ScreenId';

function MenuTopScreen() {
  const { navigate, goBack } = useScreenNavigation();
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleConfirm = () => {
    setIsConfirmationOpen(false);
    goBack();
  };

  return (
    <SidebarScreenLayout onBack={() => setIsConfirmationOpen(true)}>
      <PlainButtonPair>
        <PlainButton onClick={() => navigate(ScreenId.USER_NAME_UPDATE)}>
          ユーザー名変更
        </PlainButton>

        <PlainButton onClick={() => navigate(ScreenId.HOW_TO_PLAY)}>
          遊び方
        </PlainButton>
      </PlainButtonPair>

      <PlainButtonPair>
        <PlainButton onClick={() => alert('機能3')}>機能3</PlainButton>

        <PlainButton onClick={() => alert('機能4')}>機能4</PlainButton>
      </PlainButtonPair>

      <ConfirmationDialog
        open={isConfirmationOpen}
        onConfirm={handleConfirm}
        onCancel={() => setIsConfirmationOpen(false)}
      >
        タイトルに戻りますか？
      </ConfirmationDialog>
    </SidebarScreenLayout>
  );
}

export default MenuTopScreen;
