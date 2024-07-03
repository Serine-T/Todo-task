import { memo } from 'react';

import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

interface IMenuItem {
  path: string;
  title: string;
  isActive: boolean;
}

const MenuItem = ({ path, title, isActive }: IMenuItem) => (
  <Link to={path} style={{ textDecoration: 'none' }}>
    <Typography variant="body2" color={isActive ? 'primary' : 'grey'}>
      {title}
    </Typography>
  </Link>
);

export default memo(MenuItem);
