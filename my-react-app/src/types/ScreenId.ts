// TypeScriptでは値の名前空間と型の名前空間が分かれているため
// 定数と型の両方に対して同じ名前を与えることが可能

export const ScreenId = {
  GAME_TITLE: 'GameTitle',
  MENU_TOP: 'MenuTop',
  USER_NAME_UPDATE: 'UserNameUpdate',
  HOW_TO_PLAY: 'HowToPlay',
} as const;

export type ScreenId = (typeof ScreenId)[keyof typeof ScreenId];

export function getScreenTitle(screenId: ScreenId) {
  if (screenId === ScreenId.GAME_TITLE) {
    return 'ゲームタイトル';
  } else if (screenId === ScreenId.MENU_TOP) {
    return 'メニュートップ';
  } else if (screenId === ScreenId.USER_NAME_UPDATE) {
    return 'ユーザー名変更';
  } else if (screenId === ScreenId.HOW_TO_PLAY) {
    return '遊び方';
  } else {
    return 'impossible';
  }
}
