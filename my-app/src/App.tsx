import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { LightMode } from "@mui/icons-material";
import { LightTheme } from "./shared/themes";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}


