import { FC, memo } from 'react';

import { TypographyProps } from '@mui/material/Typography';

import Text from '../Text';

interface IErrorMessageProps extends TypographyProps {
  message?: string;
}

const ErrorMessage: FC<IErrorMessageProps> = ({
  message,
}) => (
  <Text color="red" mt="6px">
    {message}
  </Text>
);

export default memo(ErrorMessage);
