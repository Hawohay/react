import { createTheme } from '@mui/material';
import green from '@mui/material/colors/green';
import yellow from '@mui/material/colors/yellow';

export const GreenTheme = createTheme({
  palette: {
    primary: {
      main: green[700],
      dark: green[800],
      light: green[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: yellow[700],
      dark: yellow[800],
      light: yellow[500],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#ffffff',
      default: '#f7f6f3',
    }
  }
});
