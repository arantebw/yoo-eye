import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    text: "Solid",
    variant: "solid",
  },
};

export const Ghost: Story = {
  args: {
    text: "Ghost",
    variant: "ghost",
  },
};

export const Soft: Story = {
  args: {
    text: "Soft",
    variant: "soft",
  },
};

export const Transparent: Story = {
  args: {
    text: "Transparent",
    variant: "transparent",
  },
};
