import { forwardRef } from 'react';

import type { ButtonProps } from '../models';

import { ButtonStyled, ButtonIconStyled, SpinnerStyled } from './styled';

/**
 * Button — flexible, theme-aware button with variants, colors, sizes, icons, loading.
 *
 * Features:
 * - 5 variants: contained, outlined, dashed, text, ghost
 * - 6 theme colors: primary, secondary, error, warning, info, success
 * - 3 sizes: sm, md, lg
 * - Start/end icon slots
 * - Loading state with spinner
 * - Full width option
 * - Pill shape (rounded)
 * - forwardRef support
 * - WCAG 2.2 accessible (aria-busy, aria-disabled, focus-visible)
 *
 * @example
 * ```tsx
 * <Button variant="contained" color="primary" size="md">
 *   Click me
 * </Button>
 *
 * <Button variant="outlined" startIcon={<SaveIcon />} loading>
 *   Saving...
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'contained',
      color = 'primary',
      size = 'md',
      startIcon,
      endIcon,
      loading = false,
      fullWidth = false,
      rounded = false,
      disabled,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <ButtonStyled
        ref={ref}
        ownerVariant={variant}
        ownerColor={color}
        ownerSize={size}
        ownerFullWidth={fullWidth}
        ownerRounded={rounded}
        ownerLoading={loading}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        aria-disabled={disabled || loading || undefined}
        {...rest}
      >
        {loading && (
          <SpinnerStyled
            ownerSize={size}
            role="status"
            aria-label="Loading"
          />
        )}
        {!loading && startIcon && (
          <ButtonIconStyled ownerSize={size} aria-hidden="true">{startIcon}</ButtonIconStyled>
        )}
        {children}
        {!loading && endIcon && (
          <ButtonIconStyled ownerSize={size} aria-hidden="true">{endIcon}</ButtonIconStyled>
        )}
      </ButtonStyled>
    );
  },
);

Button.displayName = 'Button';
