import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ButtonLink from './ButtonLink';
import { ButtonLinkProps } from './ButtonLink.types';

const meta: Meta<typeof ButtonLink> = {
  component: ButtonLink,
  title: 'Navigation/ButtonLink',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ButtonLink>;

export const SolidButtonLink: Story = (args: ButtonLinkProps) => (
  <ButtonLink {...args}>Solid</ButtonLink>
);
SolidButtonLink.args = {
  href: 'https://goodfrontend.dev',
  variant: 'solid',
};

export const GhostButtonLink: Story = (args: ButtonLinkProps) => (
  <ButtonLink {...args}>Ghost</ButtonLink>
);
GhostButtonLink.args = {
  href: 'https://techblogs.gatsbyjs.io',
  variant: 'ghost',
};

export const SoftButtonLink: Story = (args: ButtonLinkProps) => (
  <ButtonLink {...args}>Soft</ButtonLink>
);
SoftButtonLink.args = {
  href: 'https://www.linkedin.com/in/arantebw',
  variant: 'soft',
};

export const TransparentButtonLink: Story = (args: ButtonLinkProps) => (
  <ButtonLink {...args}>Tranparent</ButtonLink>
);
TransparentButtonLink.args = {
  href: 'https://www.freecodecamp.org/arantebw',
  variant: 'transparent',
};
