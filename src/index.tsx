import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import store from '@features/app/store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConfirmProvider } from 'material-ui-confirm';
import theme from '@styles/theme';

import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ConfirmProvider>
        <CssBaseline />
        <App />
      </ConfirmProvider>
    </ThemeProvider>
  </Provider>,
);
