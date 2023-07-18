import { MouseEventHandler } from "react";

export interface ButtonProps {
  variant?: "solid" | "ghost" | "soft" | "transparent";
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
