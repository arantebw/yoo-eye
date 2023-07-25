export const getFontSize = (size: string) => {
  switch (size) {
    case 'small':
      return '0.8125rem';
    case 'large':
      return '0.9375rem';
    default:
      return '0.875rem';
  }
};

export const getPaddings = (size: string) => {
  switch (size) {
    case 'small':
      return '3px 9px';
    case 'large':
      return '7px 21px';
    default:
      return '5px 15px';
  }
};
