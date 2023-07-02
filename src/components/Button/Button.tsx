import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const S = {
  Button: styled.button`
    border: 0;
    font-size: 16px;
    line-height: 1.2;
    cursor: pointer;
    border-radius: 3px;
  `,
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <S.Button>{text}</S.Button>;
};

export default Button;
