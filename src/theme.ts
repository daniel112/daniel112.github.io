import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "Open Sans",
  },
  palette: {
    primary: {
      main: "#30535F", // Middle teal
      light: "#3D606E", // Lighter teal
      dark: "#090F13", // Darkest teal/almost black
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#153B47", // Using a darker teal as secondary
      light: "#30535F", // Middle teal
      dark: "#090F13", // Darkest teal/almost black
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
      contrastText: "#000000",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
      contrastText: "#ffffff",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#ffffff",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    background: {
      default: "#090F13", // Darkest teal/almost black for main background
      paper: "#153B47", // Dark teal for elevated surfaces
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B7C3", // Light gray for secondary text
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
    action: {
      active: "#30535F",
      hover: "#3D606E",
    },
    divider: "#153B47",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#153B47",
            },
            "&:hover fieldset": {
              borderColor: "#30535F",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#30535F",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderColor: "#153B47",
        },
      },
    },
  },
});

export default theme;
