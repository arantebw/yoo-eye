import { MouseEventHandler } from 'react';
import { CustomButtonProps } from '../../types';

export interface ButtonProps extends CustomButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'reset' | 'submit';
}
