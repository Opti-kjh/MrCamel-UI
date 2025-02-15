import React, { forwardRef, useState } from 'react';
import type { InputHTMLAttributes, ReactElement } from 'react';

import { BaseInput, StyledInput } from './Input.styles';
import { CustomStyle, GenericComponentProps, Size, Variant } from '../../types';

export interface InputProps
  extends GenericComponentProps<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>> {
  variant?: Exclude<Variant, 'ghost' | 'outlinedGhost'> | 'underline';
  size?: Exclude<Size, 'xsmall'> | 'xxlarge';
  startAdornment?: string | ReactElement;
  endAdornment?: string | ReactElement;
  unit?: string;
  fullWidth?: boolean;
  inputCustomStyle?: CustomStyle;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    variant = 'outlined',
    size = 'medium',
    startAdornment,
    endAdornment,
    unit,
    fullWidth,
    inputCustomStyle,
    customStyle,
    ...props
  },
  ref
) {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <StyledInput
      ref={ref}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      focused={focused}
      css={customStyle}
    >
      {startAdornment}
      <BaseInput {...props} css={inputCustomStyle} onFocus={handleFocus} onBlur={handleBlur} />
      {unit}
      {endAdornment}
    </StyledInput>
  );
});

export default Input;
