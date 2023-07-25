import React, { PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import { ButtonLinkProps } from './ButtonLink.types';
import { BaseStyles } from '../../styles';
import { getFontSize, getPaddings } from '../../helpers';

const BaseButtonLink = styled.a<ButtonLinkProps>`
  ${BaseStyles}
  padding: ${({ size }) => getPaddings(size as string)};
  color: rgba(25, 118, 210);
  border: 0px;
  transition: background-color 250ms;
`;

const S = {
  TransparentButtonLink: styled(BaseButtonLink)`
    background-color: transparent;
    padding: ${({ size }) => getPaddings(size as string)};
    font-size: ${({ size }) => getFontSize(size as string)};

    &:hover {
      text-decoration: none;
      background-color: rgba(25, 118, 210, 0.08);
    }
  `,
  SoftButtonLink: styled(BaseButtonLink)`
    background-color: rgba(25, 118, 210, 0.08);
    padding: ${({ size }) => getPaddings(size as string)};
    font-size: ${({ size }) => getFontSize(size as string)};

    &:hover {
      background-color: rgba(25, 118, 210, 0.16);
    }
  `,
  GhostButtonLink: styled(BaseButtonLink)`
    background-color: transparent;
    border: 1px solid rgb(25, 118, 210);
    padding: ${({ size }) => getPaddings(size as string)};
    font-size: ${({ size }) => getFontSize(size as string)};

    &:hover {
      background-color: rgba(25, 118, 210, 0.08);
    }
  `,
  SolidButtonLink: styled(BaseButtonLink)`
    background-color: rgb(25, 118, 210);
    color: rgb(255, 255, 255);
    padding: ${({ size }) => getPaddings(size as string)};
    font-size: ${({ size }) => getFontSize(size as string)};

    &:hover {
      background-color: rgb(21, 101, 192);
    }
  `,
};

const ButtonLink = ({
  children,
  href,
  size = 'medium',
  variant = 'soft',
}: PropsWithChildren<ButtonLinkProps>) => {
  switch (variant) {
    case 'transparent':
      return (
        <S.TransparentButtonLink
          href={href}
          size={size}
          tabIndex={0}
          variant={variant}
        >
          {children}
        </S.TransparentButtonLink>
      );
    case 'soft':
      return (
        <S.SoftButtonLink
          href={href}
          size={size}
          tabIndex={0}
          variant={variant}
        >
          {children}
        </S.SoftButtonLink>
      );
    case 'ghost':
      return (
        <S.GhostButtonLink
          href={href}
          size={size}
          tabIndex={0}
          variant={variant}
        >
          {children}
        </S.GhostButtonLink>
      );
    case 'solid':
      return (
        <S.SolidButtonLink
          href={href}
          size={size}
          tabIndex={0}
          variant={variant}
        >
          {children}
        </S.SolidButtonLink>
      );
    default:
      return (
        <BaseButtonLink
          href={href}
          size={size}
          tabIndex={0}
          variant={variant}
        >
          {children}
        </BaseButtonLink>
      );
  }
};

export default ButtonLink;
