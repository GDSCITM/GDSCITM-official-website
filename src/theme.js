import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1a73e8", // Google blue
    },
    secondary: {
      main: "#db4437", // Google red
    },
    warning: {
      main: "#fbbc05", // Google yellow
    },
    success: {
      main: "#34a853", // Google green
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
      grey: {
        50: "#FAFAFA",
        100: "#F6F6F6",
        200: "#EAEAEA",
        300: "#D4D4D4",
        400: "#C4C4C4",
        500: "#959595",
        600: "#666666",
        700: "#525252",
        800: "#333333",
      },
    },
    eventBackground: "#F6F6F6",
    teamsBackground: "#EAEAEA",
  },
  typography: {
    fontFamily: "Google Sans",
    h1: {
      fontFamily: "Ag",
      fontSize: "50px",
      fontWeight: 400,
      lineHeight: "50px",
    },
    h2: {
      fontFamily: "Ag",
      fontSize: "30px",
      fontWeight: 500,
      lineHeight: "30px",
    },
    h3: {
      fontFamily: "Ag",
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    h4: {
      fontFamily: "Ag",
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "20px",
    },
    h5: {
      fontFamily: "Ag",
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "18px",
    },
    body1: {
      fontFamily: "Ag",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "16px",
    },
    body2: {
      fontFamily: "Ag",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "14px",
    },
    caption: {
      fontFamily: "Ag",
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "12px",
      textTransform: "uppercase",
    },
  },
});

export default theme;
