import { createTheme } from '@mui/material';
import red from '@mui/material/colors/red';
import yellow from '@mui/material/colors/yellow';

export const RedTheme = createTheme({
  palette: {
    primary: {
      main: red[700],
      dark: red[800],
      light: red[500],
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
