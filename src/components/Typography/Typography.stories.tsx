import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';

import { Flexbox } from '@components';

import { ThemeProvider } from '@theme';

import type { TypographyVariant } from '../../types';

import Typography from './index';

const Table = styled.table`
  border-spacing: 20px;
  border-collapse: separate;
  th,
  td {
    text-align: left;
    width: 200px;
  }
`;

export default {
  title: 'Components/Typography',
  component: Typography
} as ComponentMeta<typeof Typography>;

export function Default({ ...args }) {
  return (
    <ThemeProvider theme="light">
      <Typography {...args}>Typography</Typography>
    </ThemeProvider>
  );
}

export function Sizes() {
  return (
    <ThemeProvider theme="light">
      <Table>
        <tr>
          <th>Component</th>
          <th>Size</th>
          <th>Weight</th>
        </tr>
        {(
          [
            { component: 'Header 0', variant: 'h1', size: 40 },
            { component: 'Header 1', variant: 'h1', size: 32 },
            { component: 'Header 2', variant: 'h2', size: 24 },
            { component: 'Header 3', variant: 'h3', size: 17 },
            { component: 'Header 4', variant: 'h4', size: 15 },
            { component: 'Body 1', variant: 'body1', size: 14 },
            { component: 'Body 2', variant: 'body2', size: 12 },
            { component: 'Small Text1', variant: 'small1', size: 12 },
            { component: 'Small Text2', variant: 'small2', size: 10 }
          ] as {
            component: string;
            variant: TypographyVariant;
            size: number;
          }[]
        ).map(({ component, variant, size }) => (
          <tr>
            <td>
              <Typography variant={variant}>{component}</Typography>
            </td>
            <td>
              <Typography variant={variant}>{size}px</Typography>
            </td>
            <td>
              <Flexbox justifyContent="space-between" gap={30}>
                <Typography variant={variant} weight="bold">
                  B
                </Typography>
                <Typography variant={variant} weight="medium">
                  M
                </Typography>
                <Typography variant={variant} weight="regular">
                  R
                </Typography>
              </Flexbox>
            </td>
          </tr>
        ))}
      </Table>
    </ThemeProvider>
  );
}
