import { FC, memo } from 'react';

import Typography, { TypographyProps } from '@mui/material/Typography';

interface ITextProps extends TypographyProps {}

const Text: FC<ITextProps> = ({
  children,
  ...restProps
}) => (
  <Typography
    {...restProps}
    sx={{ fontSize: '12px' }}
  >
    {children}
  </Typography>
);

export default memo(Text);
