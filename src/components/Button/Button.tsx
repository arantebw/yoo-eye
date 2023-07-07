import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const BaseButton = styled.button<ButtonProps>`
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
  color: rgba(25, 118, 210);
  border: 0px;
  transition: background-color 250ms;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const S = {
  TransparentButton: styled(BaseButton)`
    background-color: transparent;

    &:hover {
      text-decoration: none;
      background-color: rgba(25, 118, 210, 0.08);
    }
  `,
  SoftButton: styled(BaseButton)`
    background-color: rgba(25, 118, 210, 0.08);

    &:hover {
      background-color: rgba(25, 118, 210, 0.16);
    }
  `,
  GhostButton: styled(BaseButton)`
    background-color: transparent;
    border: 1px solid rgb(25, 118, 210);

    &:hover {
      background-color: rgba(25, 118, 210, 0.08);
    }
  `,
  SolidButton: styled(BaseButton)`
    background-color: rgb(25, 118, 210);
    color: rgb(255, 255, 255);

    &:hover {
      background-color: rgb(21, 101, 192);
    }
  `,
};

const Button: React.FC<ButtonProps> = ({ text, disabled, variant }) => {
  switch (variant) {
    case "transparent":
      return (
        <S.TransparentButton
          disabled={disabled}
          variant={variant}
          type="button"
        >
          {text}
        </S.TransparentButton>
      );
    case "soft":
      return (
        <S.SoftButton
          disabled={disabled}
          variant={variant}
          type="button"
        >
          {text}
        </S.SoftButton>
      );
    case "ghost":
      return (
        <S.GhostButton
          disabled={disabled}
          variant={variant}
          type="button"
        >
          {text}
        </S.GhostButton>
      );
    case "solid":
      return (
        <S.SolidButton
          disabled={disabled}
          variant={variant}
          type="button"
        >
          {text}
        </S.SolidButton>
      );
    default:
      return (
        <BaseButton
          disabled={disabled}
          variant={variant}
          type="button"
        >
          {text}
        </BaseButton>
      );
  }
};

export default Button;
