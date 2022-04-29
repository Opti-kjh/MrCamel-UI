import React, { memo, PropsWithChildren, ReactElement, ButtonHTMLAttributes } from 'react';
import { useTheme } from '@theme';

import { GenericComponentProps, CSSValue, Variant, ComponentColor, Size } from '../../../types';
import { StyledDefaultButton, ButtonInner } from './DefaultButton.styles';

export interface DefaultButtonProps
  extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: Size;
  round?: CSSValue;
  fullWidth?: boolean;
}

export type RequireAtOnlyOneIcon<T> = T &
  (
    | {
        iconOnly?: boolean;
        startIcon: ReactElement;
        endIcon?: never;
      }
    | {
        iconOnly?: boolean;
        startIcon?: never;
        endIcon: ReactElement;
      }
    | {
        iconOnly?: never;
        startIcon?: ReactElement;
        endIcon?: ReactElement;
      }
  );

export type ConditionalSupportColor<T> = T &
  (
    | {
        variant?: Exclude<Variant, 'contained'>;
        color?: Exclude<ComponentColor, 'primary' | 'black' | 'grey'>;
      }
    | {
        variant?: Exclude<Variant, 'outlined'>;
        color?: Exclude<ComponentColor, 'default'>;
      }
  );

function DefaultButton({
  children,
  ref,
  variant = 'outlined',
  color = 'default',
  size = 'medium',
  round,
  startIcon,
  endIcon,
  iconOnly = false,
  fullWidth = false,
  customStyle,
  ...props
}: PropsWithChildren<RequireAtOnlyOneIcon<ConditionalSupportColor<DefaultButtonProps>>>) {
  const { theme } = useTheme();

  return (
    <StyledDefaultButton
      ref={ref}
      theme={theme}
      variant={variant}
      color={color}
      size={size}
      round={round}
      fullWidth={fullWidth}
      css={customStyle}
      {...props}
    >
      <ButtonInner>
        {startIcon}
        {!iconOnly && children}
        {endIcon}
      </ButtonInner>
    </StyledDefaultButton>
  );
}

export default memo(DefaultButton);
