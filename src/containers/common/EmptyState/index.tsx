import { memo } from 'react';

import Typography from '@mui/material/Typography';

import { StyledTitleBox } from './styled';

interface IEmptyState {
  text: string;
}

const EmptyState = ({ text }: IEmptyState) => (
  <StyledTitleBox>
    <Typography color="grey">
      {text}
    </Typography>

  </StyledTitleBox>
);

export default memo(EmptyState);
