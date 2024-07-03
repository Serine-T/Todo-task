import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';

export const StyledBaseInput = styled(InputBase)(() => ({
  '.MuiInputBase-input': {
    height: 13,
    padding: '10px 12px',
    fontSize: 12,
    borderRadius: 4,

    '&:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 100px white inset',
    },
  },
}));

export const StyledFormControl = styled(FormControl, {
  shouldForwardProp: (prop) => prop !== 'width',
})<{width?: string}>(({ theme, width }) => ({
  width: width ?? '100%',
  borderRadius: 4,
  padding: 0,
  border: `1px solid ${theme.palette.grey[500]}`,
  background: theme.palette.common.white,
}));
