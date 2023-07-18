import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  title: "Inputs/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const SolidButton: Story = (args: ButtonProps) => (
  <Button variant="solid">Solid</Button>
);
SolidButton.args = {
  variant: "solid",
};

export const GhostButton: Story = (args: ButtonProps) => (
  <Button variant="ghost">Ghost</Button>
);
GhostButton.args = {
  variant: "ghost",
};

export const SoftButton: Story = (args: ButtonProps) => (
  <Button {...args}>Soft</Button>
);
SoftButton.args = {
  variant: "soft",
};

export const TransparentButton: Story = (args: ButtonProps) => (
  <Button {...args}>Transparent</Button>
);
TransparentButton.args = {
  variant: "transparent",
};
