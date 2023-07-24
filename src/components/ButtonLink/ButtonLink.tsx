import React, { PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import { ButtonLinkProps } from './ButtonLink.types';
import { BaseStyles } from '../Button/Button';

const S = {
  Anchor: styled.a<ButtonLinkProps>`
    ${BaseStyles}
  `,
};

const ButtonLink = ({
  children,
  href,
  variant,
}: PropsWithChildren<ButtonLinkProps>) => {
  return <S.Anchor href={href}>{children}</S.Anchor>;
};

export default ButtonLink;
