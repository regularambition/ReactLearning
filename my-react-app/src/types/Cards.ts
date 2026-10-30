import {
  planetIcon,
  rainbowIcon,
  sunIcon,
  sunglassIcon,
} from '../asset_path_reference/images/player_actions';

export const Card = {
  PLANET: { name: '惑星', iconPath: planetIcon },
  RAINBOW: { name: '虹', iconPath: rainbowIcon },
  SUN: { name: '太陽', iconPath: sunIcon },
  SUNGLASS: { name: 'サングラス', iconPath: sunglassIcon },
} as const;

export type Card = (typeof Card)[keyof typeof Card];
