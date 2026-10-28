import { useState, type SubmitEventHandler } from 'react';
import SidebarScreenLayout from '../../components/layout/SidebarScreenLayout';
import PlainButton from '../../components/ui/buttons/PlainButton/PlainButton';
import ConfirmationDialog from '../../components/ui/dialogs/ConfirmationDialog/ConfirmationDialog';
import TextInputWithHint from '../../components/ui/inputs/TextInputWithHint/TextInputWithHint';
import { useScreenNavigation } from '../../contexts/ScreenNavigationContext';
import { useUser } from '../../contexts/UserContext';
import UserNameValidator from '../../validators/UserNameValidator';
import './UserNameUpdateScreen.css';

function UserNameUpdateScreen() {
  const { setUserName } = useUser();
  const { goBack } = useScreenNavigation();
  const [newUserName, setNewUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const validationResult = UserNameValidator.validate(newUserName);

    if (!validationResult.isValid) {
      setErrorMessage(validationResult.errorMessage);
      return;
    }

    setIsConfirmationOpen(true);
  };

  const handleConfirm = () => {
    setIsConfirmationOpen(false);
    setUserName(newUserName);
    goBack();
  };

  return (
    <SidebarScreenLayout>
      <form
        className="user-name-update-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <TextInputWithHint
          id="new-user-name"
          label="新しいユーザー名"
          hint={UserNameValidator.hint()}
          errorMessage={errorMessage || undefined}
          type="text"
          value={newUserName}
          autoComplete="username"
          autoFocus
          onChange={(event) => {
            setNewUserName(event.target.value);
            setErrorMessage('');
          }}
        />

        <PlainButton type="submit">決定</PlainButton>
      </form>

      <ConfirmationDialog
        open={isConfirmationOpen}
        onConfirm={handleConfirm}
        onCancel={() => setIsConfirmationOpen(false)}
      >
        「{newUserName}」に変更します。よろしいですか？
      </ConfirmationDialog>
    </SidebarScreenLayout>
  );
}

export default UserNameUpdateScreen;
