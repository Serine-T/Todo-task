import { memo } from 'react';

import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PAGE_ROUTES from '@routes/routingEnum';
import Text from '@containers/common/Text';

import { StyledBackBox } from './styled';

interface IBackButton {
  path: keyof typeof PAGE_ROUTES;
 }

const BackButton = ({ path }: IBackButton) => (
  <Link to={PAGE_ROUTES[path]}>
    <StyledBackBox>
      <ArrowBackIosIcon />
      <Text>
        Back
      </Text>
    </StyledBackBox>
  </Link>
);

export default memo(BackButton);
