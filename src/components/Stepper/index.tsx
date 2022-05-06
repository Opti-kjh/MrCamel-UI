import React, { forwardRef, HTMLAttributes } from 'react';
import { useTheme } from '@theme';

import { GenericComponentProps } from '../../types';
import { StyledStepper, StepperItem } from './Stepper.styles';

export interface StepperProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  count: number;
  value?: number;
}

const Stepper = forwardRef<HTMLDivElement, StepperProps>(function Stepper(
  { count, value = 0, customStyle, ...props },
  ref
) {
  const { theme } = useTheme();

  return (
    <StyledStepper ref={ref} css={customStyle} {...props}>
      {Array.from({ length: count }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <StepperItem key={`stepper-${index}`} theme={theme} active={value === index + 1} />
      ))}
    </StyledStepper>
  );
});

export default Stepper;
