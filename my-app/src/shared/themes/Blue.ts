import { createTheme } from '@mui/material';
import blue from '@mui/material/colors/blue';
import yellow from '@mui/material/colors/yellow';

export const BlueTheme = createTheme({
  palette: {
    primary: {
      main: blue[700],
      dark: blue[800],
      light: blue[500],
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
