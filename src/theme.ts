import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "Open Sans",
  },
  palette: {
    primary: {
      main: "#00695c",
      light: "#439889",
      dark: "#003d33",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#69000c",
      light: "#9c4037",
      dark: "#390000",
      contrastText: "#ffffff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#000000",
      secondary: "#757575",
    },
    // Add these new color variants
    onPrimary: {
      main: "#ffffff",
    },
    onSecondary: {
      main: "#ffffff",
    },
    onBackground: {
      main: "#000000",
    },
    onSurface: {
      main: "#000000",
    },
    onError: {
      main: "#ffffff",
    },
  },
});

export default theme;
