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
    border: 0px;
    font-size: 0.8rem;
    line-height: 1.75;
    cursor: pointer;
    border-radius: 4px;
    background-color: #4964e9;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    width: fit-content;
    padding: 6px 16px;
    user-select: none;
    appearance: none;
    font-weight: normal;
    font-family: Helvetica, Arial, sans-serif;
    color: #ffffff;
    letter-spacing: 1px;
    text-transform: uppercase;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  `,
};

const Button: React.FC<ButtonProps> = ({ text, disabled }) => {
  return (
    <S.Button
      disabled={disabled}
      type="button"
    >
      {text}
    </S.Button>
  );
};

export default Button;
