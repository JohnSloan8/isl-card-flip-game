import { createTheme } from "@mui/material/styles";
import { blue, deepOrange } from "@mui/material/colors";

const aladdinTheme = createTheme({
  palette: {
    primary: {
      main: blue[800],
      dark: blue[900],
      light: blue[200],
    },
    secondary: {
      main: deepOrange[400],
    },
  },
  typography: {
    fontFamily: "sans serif",
  },
});

export default aladdinTheme;
