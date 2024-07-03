import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import palette from './palette';
import { MuiCssBaseline } from './globalStyles';

const theme = createTheme({
  palette,
  components: {
    MuiCssBaseline,
  },
});

export default responsiveFontSizes(theme);
