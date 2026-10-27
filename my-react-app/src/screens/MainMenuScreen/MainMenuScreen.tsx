import SidebarScreenLayout from '../../components/layout/SidebarScreenLayout';
import PlainButton from '../../components/ui/buttons/PlainButton/PlainButton';
import PlainButtonPair from '../../components/ui/buttons/PlainButtonPair/PlainButtonPair';
import { type ScreenId } from '../../types/ScreenId';

type MainMenuScreenProps = {
  screenId: ScreenId;
};

function MainMenuScreen({ screenId }: MainMenuScreenProps) {
  return (
    <SidebarScreenLayout screenId={screenId}>
      <PlainButtonPair>
        <PlainButton onClick={() => alert('機能1')}>機能1</PlainButton>

        <PlainButton onClick={() => alert('機能2')}>機能2</PlainButton>
      </PlainButtonPair>

      <PlainButtonPair>
        <PlainButton onClick={() => alert('機能3')}>機能3</PlainButton>

        <PlainButton onClick={() => alert('機能4')}>機能4</PlainButton>
      </PlainButtonPair>
    </SidebarScreenLayout>
  );
}

export default MainMenuScreen;
