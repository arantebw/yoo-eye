import React, { PropsWithChildren } from 'react';
import { ButtonLinkProps } from './ButtonLink.types';

const ButtonLink = ({ children }: PropsWithChildren<ButtonLinkProps>) => {
  return <a href="#">{children}</a>;
};

export default ButtonLink;
