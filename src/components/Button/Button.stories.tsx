import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  render: () => (
    <Button
      text="Solid"
      variant="solid"
    />
  ),
};
