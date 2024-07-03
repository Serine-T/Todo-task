import { memo, ReactNode } from 'react';

import MuiButton, { ButtonProps } from '@mui/material/Button';

import { StyledButton } from './styled';

interface IButtonProps extends Omit<ButtonProps, 'title'> {
  title?: ReactNode;
  width?: string | number;
  isOutlined?: boolean;
  isLoading?: boolean;
}

const Button = ({
  width,
  color,
  children,
  title,
  isOutlined,
  isLoading,
  ...restProps
}: IButtonProps) => {
  if (color) {
    return (
      <MuiButton color={color} {...restProps}>
        {children || title}
      </MuiButton>
    );
  }

  return (
    <StyledButton
      disableRipple
      width={width}
      isOutlined={isOutlined}
      {...restProps}
    >
      {children || title}
    </StyledButton>
  );
};

export default memo(Button);
