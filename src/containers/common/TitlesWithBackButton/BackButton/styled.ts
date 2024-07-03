import { styled } from '@mui/material/styles';

import { StyledTextButton } from '../../Button/styled';

export const StyledBackBox = styled(StyledTextButton)(() => ({
  display: 'flex',
  alignItems: 'center',

  svg: {
    fontSize: '12px',
  },
}));
