import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isOutlined' && prop !== 'width',
})<{ width?: string | number; isOutlined?: boolean }>(({
  theme, width, isOutlined = false,
}) => ({
  width: width ?? '100%',
  height: '34px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '12px',
  border: '1px solid',
  lineHeight: '12px',
  backgroundColor: isOutlined ? theme.palette.common.white : theme.palette.error.light,
  borderColor: theme.palette.error.light,
  borderRadius: 4,
  color: isOutlined ? theme.palette.error.light : theme.palette.common.white,
  padding: '11px 12px',

  '&:hover': {
    backgroundColor: isOutlined ? theme.palette.common.white : theme.palette.error.light,
  },
}));

export const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.common.white,
}));

export const StyledTextButton = styled(Button)(() => ({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 10,
  padding: 0,
  margin: 0,
  minWidth: 'unset',
  '&:hover': {
    backgroundColor: 'unset',
  },
}));
