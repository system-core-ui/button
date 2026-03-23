import { CSSObject, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeSchema } from '@thanh-libs/theme';

import type { ButtonVariant, ButtonColor, ButtonSize } from '../models';

import { BUTTON_SIZES, TRANSITION_DURATION } from '../constants';

// ─── Helpers ────────────────────────────────────────────

const getColorValues = (palette: ThemeSchema['palette'], color: ButtonColor) => {
  const colorPalette = palette?.[color];
  return {
    main: colorPalette?.main ?? '#1976d2',
    dark: colorPalette?.dark ?? '#1565c0',
    light: colorPalette?.light ?? '#42a5f5',
    extraLight: colorPalette?.extraLight ?? '#e3f2fd',
  };
};

// ─── Styled ─────────────────────────────────────────────

export interface ButtonStyledProps {
  ownerVariant: ButtonVariant;
  ownerColor: ButtonColor;
  ownerSize: ButtonSize;
  ownerFullWidth?: boolean;
  ownerRounded?: boolean;
  ownerLoading?: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>(
  ({
    ownerVariant,
    ownerColor,
    ownerSize,
    ownerFullWidth,
    ownerRounded,
    ownerLoading,
  }): CSSObject => {
    const { palette, shape, font }: ThemeSchema = useTheme();
    const colors = getColorValues(palette, ownerColor);
    const size = BUTTON_SIZES[ownerSize];

    // ── Base ──────────────────────────────────
    const base: CSSObject = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: size.gap,
      boxSizing: 'border-box',
      border: 'none',
      outline: 'none',
      cursor: ownerLoading ? 'wait' : 'pointer',
      userSelect: 'none',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      fontFamily: font?.fontFamily ?? 'inherit',
      fontSize: size.fontSize,
      fontWeight: 500,
      lineHeight: 1,
      height: size.height,
      paddingLeft: size.paddingX,
      paddingRight: size.paddingX,
      borderRadius: ownerRounded ? 999 : (shape?.borderRadius ?? 6),
      width: ownerFullWidth ? '100%' : undefined,
      transition: `background-color ${TRANSITION_DURATION}ms ease, color ${TRANSITION_DURATION}ms ease, border-color ${TRANSITION_DURATION}ms ease, box-shadow ${TRANSITION_DURATION}ms ease, opacity ${TRANSITION_DURATION}ms ease`,

      // Disabled + loading
      '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },

      // Focus visible ring
      '&:focus-visible': {
        boxShadow: `0 0 0 3px ${colors.light}40`,
      },
    };

    // ── Variant styles ────────────────────────
    const variants: Record<ButtonVariant, CSSObject> = {
      contained: {
        backgroundColor: colors.main,
        color: palette?.common?.white ?? '#fff',
        '&:hover': {
          backgroundColor: colors.dark,
        },
        '&:active': {
          backgroundColor: colors.dark,
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.15)',
        },
      },
      outlined: {
        backgroundColor: 'transparent',
        color: colors.main,
        border: `1.5px solid ${colors.main}`,
        '&:hover': {
          backgroundColor: colors.extraLight,
        },
        '&:active': {
          backgroundColor: colors.extraLight,
        },
      },
      dashed: {
        backgroundColor: 'transparent',
        color: colors.main,
        border: `1.5px dashed ${colors.main}`,
        '&:hover': {
          backgroundColor: colors.extraLight,
        },
        '&:active': {
          backgroundColor: colors.extraLight,
        },
      },
      text: {
        backgroundColor: 'transparent',
        color: colors.main,
        '&:hover': {
          backgroundColor: colors.extraLight,
        },
        '&:active': {
          backgroundColor: colors.extraLight,
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: palette?.text?.primary ?? '#333',
        '&:hover': {
          backgroundColor: palette?.action?.hoverBackground ?? 'rgba(0,0,0,0.04)',
        },
        '&:active': {
          backgroundColor: palette?.action?.activatedBackground ?? 'rgba(0,0,0,0.08)',
        },
      },
    };

    return {
      ...base,
      ...variants[ownerVariant],
    };
  },
);

// ─── Icon Wrappers ──────────────────────────────────────

export const ButtonIconStyled = styled.span<{ ownerSize: ButtonSize }>(
  ({ ownerSize }): CSSObject => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: BUTTON_SIZES[ownerSize].iconSize,
    height: BUTTON_SIZES[ownerSize].iconSize,
    '& > svg': {
      width: '100%',
      height: '100%',
    },
  }),
);

// ─── Spinner ────────────────────────────────────────────

export const SpinnerStyled = styled.span<{ ownerSize: ButtonSize }>(
  ({ ownerSize }): CSSObject => {
    const iconSize = BUTTON_SIZES[ownerSize].iconSize;
    return {
      display: 'inline-flex',
      width: iconSize,
      height: iconSize,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      animation: 'button-spin 0.6s linear infinite',
      '@keyframes button-spin': {
        to: { transform: 'rotate(360deg)' },
      },
    };
  },
);
