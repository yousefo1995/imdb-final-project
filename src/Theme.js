import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 600,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#f5c518",
    },
    action: {
      main: "#2F2F2F",
    },
    info: {
      main: "#5799ef",
    },
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 700,
    },
  },
});

export default theme;
