import React, { PropsWithChildren } from 'react';
import { ButtonLinkProps } from './ButtonLink.types';

const ButtonLink = ({ children, href }: PropsWithChildren<ButtonLinkProps>) => {
  return <a href={href}>{children}</a>;
};

export default ButtonLink;
