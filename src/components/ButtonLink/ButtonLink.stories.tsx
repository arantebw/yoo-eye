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
};
