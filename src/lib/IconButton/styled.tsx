import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';

import type { ButtonSize } from '../models';

import { BUTTON_SIZES } from '../constants';

import { ButtonStyled } from '../Button/styled';

// ─── IconButton Styled ──────────────────────────────────

interface IconButtonStyledProps {
  ownerSize: ButtonSize;
}

export const IconButtonStyled = styled(ButtonStyled)<IconButtonStyledProps>(
  ({ ownerSize }): CSSObject => {
    const size = BUTTON_SIZES[ownerSize];

    return {
      // Square by default, circle when rounded
      width: size.height,
      height: size.height,
      padding: 0,
      minWidth: 'unset',
    };
  },
);
