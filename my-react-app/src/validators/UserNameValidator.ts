export type UserNameValidationResult =
  { isValid: true } | { isValid: false; errorMessage: string };

class UserNameValidator {
  private static readonly MIN_LENGTH = 1;
  private static readonly MAX_LENGTH = 16;

  private static readonly pattern = new RegExp(
    `^[A-Za-z0-9]{${UserNameValidator.MIN_LENGTH},${UserNameValidator.MAX_LENGTH}}$`,
  );

  private static readonly availableCharacterDescription = '半角英数字';

  private static readonly errorMessage =
    `${UserNameValidator.MIN_LENGTH}〜${UserNameValidator.MAX_LENGTH}文字の${UserNameValidator.availableCharacterDescription}` +
    'で入力してください';

  private static readonly HINT =
    `※${UserNameValidator.MAX_LENGTH}文字以内の${UserNameValidator.availableCharacterDescription}` +
    'のみ入力可能';

  static validate(userName: string): UserNameValidationResult {
    if (!UserNameValidator.pattern.test(userName)) {
      return {
        isValid: false,
        errorMessage: UserNameValidator.errorMessage,
      };
    }

    return { isValid: true };
  }

  static hint() {
    return UserNameValidator.HINT;
  }
}

export default UserNameValidator;
