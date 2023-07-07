import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = (args: ButtonProps) => <Button {...args} />;
Solid.args = {
  text: "Solid",
  variant: "solid",
};

export const Ghost: Story = (args: ButtonProps) => <Button {...args} />;
Ghost.args = {
  text: "Ghost",
  variant: "ghost",
};

export const Soft: Story = (args: ButtonProps) => <Button {...args} />;
Soft.args = {
  text: "Soft",
  variant: "soft",
};

export const Transparent: Story = (args: ButtonProps) => <Button {...args} />;
Transparent.args = {
  text: "Transparent",
  variant: "transparent",
};
