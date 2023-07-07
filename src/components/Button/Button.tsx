import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const S = {
  Button: styled.button<ButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    outline: 0px;
    font-size: 0.8rem;
    line-height: 1.75;
    cursor: pointer;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    padding: 6px 16px;
    user-select: none;
    appearance: none;
    font-weight: normal;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    min-width: 64px;
    tabindex: 0;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    color: ${({ variant }) => (variant === "solid" ? "#fff" : "#4964e9")};
    background-color: ${({ variant }) =>
      variant === "solid"
        ? "#4964e9"
        : variant === "soft"
        ? "#f4f6fe"
        : "transparent"};
    border: ${({ variant }) =>
      variant === "ghost" ? "1px solid #4964e9" : "0px"};
  `,
};

const Button: React.FC<ButtonProps> = ({ text, disabled, variant }) => {
  return (
    <S.Button
      disabled={disabled}
      variant={variant}
      type="button"
    >
      {text}
    </S.Button>
  );
};

export default Button;
