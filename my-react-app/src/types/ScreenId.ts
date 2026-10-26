// TypeScriptでは値の名前空間と型の名前空間が分かれているため
// 定数と型の両方に対して同じ名前を与えることが可能

export const ScreenId = {
  FIRST: 'first',
  MAIN_MENU: 'mainMenu',
} as const;

export type ScreenId = (typeof ScreenId)[keyof typeof ScreenId];
