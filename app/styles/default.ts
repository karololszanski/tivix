import { createTheme } from "@mui/material/styles";
import { teal, red, orange } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: orange,
    secondary: teal,
    text: {
      primary: "#212121",
      secondary: "#ff9800",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#000051",
    },
    action: {
      disabledBackground: "#9499b7",
      disabled: "#000000",
    },
  },
  typography: {
    fontFamily: ["open-sans", "sans-serif"].join(","),
  },
});

export default theme;
