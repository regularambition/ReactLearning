// TypeScriptでは値の名前空間と型の名前空間が分かれているため
// 定数と型の両方に対して同じ名前を与えることが可能

export const ScreenId = {
  FIRST: 'first',
  MAIN_MENU: 'mainMenu',
} as const;

export type ScreenId = (typeof ScreenId)[keyof typeof ScreenId];

export function getScreenTitle(screenId: ScreenId) {
  if (screenId === ScreenId.FIRST) {
    return '最初の画面';
  } else if (screenId === ScreenId.MAIN_MENU) {
    return 'メインメニュー';
  } else {
    return 'impossible';
  }
}
