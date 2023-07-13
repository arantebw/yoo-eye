import { MouseEventHandler } from "react";

export interface ButtonProps {
  variant?: "solid" | "ghost" | "soft" | "transparent";
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
