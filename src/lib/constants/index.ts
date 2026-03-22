import type { ButtonSize } from '../models';

/** Transition duration in ms */
export const TRANSITION_DURATION = 150;

/** Size presets: height, padding, font-size, icon-size */
export const BUTTON_SIZES: Record<ButtonSize, {
  height: number;
  paddingX: number;
  fontSize: number;
  iconSize: number;
  gap: number;
}> = {
  sm: { height: 32, paddingX: 12, fontSize: 13, iconSize: 16, gap: 4 },
  md: { height: 40, paddingX: 16, fontSize: 14, iconSize: 20, gap: 6 },
  lg: { height: 48, paddingX: 24, fontSize: 16, iconSize: 24, gap: 8 },
};
