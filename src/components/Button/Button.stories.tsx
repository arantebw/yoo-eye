import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  title: 'Inputs/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const SolidButton: Story = (args: ButtonProps) => (
  <Button {...args}>Solid</Button>
);
SolidButton.args = {
  variant: 'solid',
  type: 'submit',
  onClick: () => console.log('solid button is clicked'),
};

export const GhostButton: Story = (args: ButtonProps) => (
  <Button {...args}>Ghost</Button>
);
GhostButton.args = {
  variant: 'ghost',
  type: 'reset',
  onClick: () => console.log('ghost button is clicked'),
};

export const SoftButton: Story = (args: ButtonProps) => (
  <Button {...args}>Soft</Button>
);
SoftButton.args = {
  variant: 'soft',
  onClick: () => console.log('soft button is clicked'),
};

export const TransparentButton: Story = (args: ButtonProps) => (
  <Button {...args}>Transparent</Button>
);
TransparentButton.args = {
  variant: 'transparent',
  onClick: () => console.log('transparent button is clicked'),
};
