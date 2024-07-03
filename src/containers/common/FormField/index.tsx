import { ReactNode, memo } from 'react';

import { Stack, TableRowProps } from '@mui/material';
import Text from '@containers/common/Text';

interface IFormField extends TableRowProps {
  label: string;
  isRequired?: boolean;
  children: ReactNode;
}

const FormField = ({ label, isRequired, children }: IFormField) => (
  <Stack my="15px">
    <Text flexDirection="column">
      {`${label}: ${isRequired ? '*' : ''}`}
    </Text>
    <Stack>{children}</Stack>
  </Stack>
);

export default memo(FormField);
