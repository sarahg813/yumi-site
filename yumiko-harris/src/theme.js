import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
      dark: "#8c4eb8"
    },
    secondary: {
      main: "#ff00ff"
    }
  },
  typography: {
    fontFamily: '"Oranienbaum","Roboto","Courgette",sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  },
  button: {
    color: "#ffffff"
  }
});

theme.typography.h1 = {
  fontSize: "1rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem"
  }
};

export default theme;
