import { forwardRef } from 'react';

import type { IconButtonProps } from '../models';

import { ButtonIconStyled, SpinnerStyled } from '../Button/styled';

import { IconButtonStyled } from './styled';

/**
 * IconButton — icon-only button, square (or circle when rounded).
 *
 * Inherits all Button variant/color styles. Defaults to 'ghost' variant.
 *
 * WCAG 2.2: Icon-only buttons MUST have an accessible name.
 * Provide `aria-label` or wrap the icon content with visually-hidden text.
 *
 * @example
 * ```tsx
 * <IconButton color="error" aria-label="Delete" rounded>
 *   <TrashIcon />
 * </IconButton>
 * ```
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = 'ghost',
      color = 'primary',
      size = 'md',
      rounded = true,
      loading = false,
      disabled,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <IconButtonStyled
        ref={ref}
        ownerVariant={variant}
        ownerColor={color}
        ownerSize={size}
        ownerRounded={rounded}
        ownerLoading={loading}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        aria-disabled={disabled || loading || undefined}
        {...rest}
      >
        {loading ? (
          <SpinnerStyled ownerSize={size} role="status" aria-label="Loading" />
        ) : (
          <ButtonIconStyled ownerSize={size} aria-hidden="true">{children}</ButtonIconStyled>
        )}
      </IconButtonStyled>
    );
  },
);

IconButton.displayName = 'IconButton';
