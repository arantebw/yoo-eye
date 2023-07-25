import { MouseEventHandler } from 'react';
import { CustomButtonProps } from '../../types';

export interface ButtonLinkProps extends CustomButtonProps {
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}
