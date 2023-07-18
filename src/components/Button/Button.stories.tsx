import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  title: "Inputs/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const SolidButton: Story = {
  render: () => <Button variant="solid">Solid</Button>,
};
