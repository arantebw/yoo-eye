import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const S = {
  Button: styled.button<ButtonProps>`
    border: 0;
    font-size: 16px;
    line-height: 1.2;
    cursor: pointer;
    border-radius: 3px;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  `,
};

const Button: React.FC<ButtonProps> = ({ text, disabled }) => {
  return <S.Button disabled={disabled}>{text}</S.Button>;
};

export default Button;
