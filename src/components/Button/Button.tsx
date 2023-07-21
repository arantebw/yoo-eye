import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const getFontSize = (size: string) => {
  switch (size) {
    case 'small':
      return '0.8125rem';
    case 'large':
      return '0.9375rem';
    default:
      return '0.875rem';
  }
};

const getPaddings = (size: string) => {
  switch (size) {
    case 'small':
      return '3px 9px';
    case 'large':
      return '7px 21px';
    default:
      return '5px 15px';
  }
};

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
  padding: ${({ size }) => getPaddings(size as string)};
  user-select: none;
  appearance: none;
  font-weight: normal;
  font-family: Helvetica, Arial, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  min-width: 64px;
  color: rgba(25, 118, 210);
  border: 0px;
  transition: background-color 250ms;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const S = {
  TransparentButton: styled(BaseButton)`
    background-color: transparent;
    padding: ${({ size }) => getPaddings(size as string)};
    font-size: ${({ size }) => getFontSize(size as string)};

    &:hover {
      text-decoration: none;
      background-color: rgba(25, 118, 210, 0.08);
    }
  `,
  SoftButton: styled(BaseButton)`
    background-color: rgba(25, 118, 210, 0.08);
    padding: ${({ size }) => getPaddings(size as string)};
    font-size: ${({ size }) => getFontSize(size as string)};

    &:hover {
      background-color: rgba(25, 118, 210, 0.16);
    }
  `,
  GhostButton: styled(BaseButton)`
    background-color: transparent;
    border: 1px solid rgb(25, 118, 210);
    padding: ${({ size }) => getPaddings(size as string)};
    font-size: ${({ size }) => getFontSize(size as string)};

    &:hover {
      background-color: rgba(25, 118, 210, 0.08);
    }
  `,
  SolidButton: styled(BaseButton)`
    background-color: rgb(25, 118, 210);
    color: rgb(255, 255, 255);
    padding: ${({ size }) => getPaddings(size as string)};
    font-size: ${({ size }) => getFontSize(size as string)};

    &:hover {
      background-color: rgb(21, 101, 192);
    }
  `,
};

const Button = ({
  children,
  size = 'medium',
  type = 'button',
  variant = 'soft',
}: PropsWithChildren<ButtonProps>) => {
  switch (variant) {
    case 'transparent':
      return (
        <S.TransparentButton
          size={size}
          type={type}
          tabIndex={0}
          variant={variant}
        >
          {children}
        </S.TransparentButton>
      );
    case 'soft':
      return (
        <S.SoftButton
          size={size}
          type={type}
          tabIndex={0}
          variant={variant}
        >
          {children}
        </S.SoftButton>
      );
    case 'ghost':
      return (
        <S.GhostButton
          size={size}
          type={type}
          tabIndex={0}
          variant={variant}
        >
          {children}
        </S.GhostButton>
      );
    case 'solid':
      return (
        <S.SolidButton
          size={size}
          type={type}
          tabIndex={0}
          variant={variant}
        >
          {children}
        </S.SolidButton>
      );
    default:
      return (
        <BaseButton
          size={size}
          type={type}
          tabIndex={0}
          variant={variant}
        >
          {children}
        </BaseButton>
      );
  }
};

export default Button;
