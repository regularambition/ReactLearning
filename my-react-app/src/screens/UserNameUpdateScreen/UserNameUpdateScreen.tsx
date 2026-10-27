import { useState, type FormEvent } from 'react';
import SidebarScreenLayout from '../../components/layout/SidebarScreenLayout';
import PlainButton from '../../components/ui/buttons/PlainButton/PlainButton';
import TextInputWithHint from '../../components/ui/inputs/TextInputWithHint/TextInputWithHint';
import { useScreenNavigation } from '../../contexts/ScreenNavigationContext';
import { useUser } from '../../contexts/UserContext';
import './UserNameUpdateScreen.css';

const USER_NAME_PATTERN = /^[A-Za-z0-9]{1,16}$/;
const USER_NAME_HINT = '※16文字以内の半角英数字のみ入力可能';
const USER_NAME_ERROR = '1〜16文字の半角英数字で入力してください';

function UserNameUpdateScreen() {
  const { setUserName } = useUser();
  const { goBack } = useScreenNavigation();
  const [newUserName, setNewUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!USER_NAME_PATTERN.test(newUserName)) {
      setErrorMessage(USER_NAME_ERROR);
      return;
    }

    setUserName(newUserName);
    goBack();
  };

  return (
    <SidebarScreenLayout>
      <form className="user-name-update-form" onSubmit={handleSubmit} noValidate>
        <TextInputWithHint
          id="new-user-name"
          label="新しいユーザー名"
          hint={USER_NAME_HINT}
          errorMessage={errorMessage || undefined}
          type="text"
          value={newUserName}
          maxLength={16}
          pattern="[A-Za-z0-9]{1,16}"
          autoComplete="username"
          autoFocus
          onChange={(event) => {
            setNewUserName(event.target.value);
            setErrorMessage('');
          }}
        />

        <PlainButton type="submit">決定</PlainButton>
      </form>
    </SidebarScreenLayout>
  );
}

export default UserNameUpdateScreen;
