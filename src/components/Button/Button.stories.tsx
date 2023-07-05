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

export const Primary: Story = (args: ButtonProps) => <Button {...args} />;
Primary.args = {
  text: "Primary",
  disabled: false,
};
