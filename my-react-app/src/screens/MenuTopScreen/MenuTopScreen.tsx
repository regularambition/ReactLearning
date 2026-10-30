import SidebarScreenLayout from '../../components/layout/SidebarScreenLayout';
import PlainButton from '../../components/ui/buttons/PlainButton/PlainButton';
import PlainButtonPair from '../../components/ui/buttons/PlainButtonPair/PlainButtonPair';
import { useScreenNavigation } from '../../contexts/ScreenNavigationContext';
import { ScreenId } from '../../types/ScreenId';

function MenuTopScreen() {
  const { navigate } = useScreenNavigation();

  return (
    <SidebarScreenLayout>
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
    </SidebarScreenLayout>
  );
}

export default MenuTopScreen;
