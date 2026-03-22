import { forwardRef } from 'react';

import type { IconButtonProps } from '../models';

import { ButtonIconStyled, SpinnerStyled } from '../Button/styled';

import { IconButtonStyled } from './styled';

/**
 * IconButton — icon-only button, square (or circle when rounded).
 *
 * Inherits all Button variant/color styles. Defaults to 'ghost' variant.
 *
 * @example
 * ```tsx
 * <IconButton color="error" rounded>
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
        {...rest}
      >
        {loading ? (
          <SpinnerStyled ownerSize={size} />
        ) : (
          <ButtonIconStyled ownerSize={size}>{children}</ButtonIconStyled>
        )}
      </IconButtonStyled>
    );
  },
);

IconButton.displayName = 'IconButton';
