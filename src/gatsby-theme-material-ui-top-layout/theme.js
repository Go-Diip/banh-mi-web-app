import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  navHeight: 74,
  sectionPadding: "padding-top: 1.5em; padding-bottom: 1.5em;",
  fonts: {
    primary: "Kanit, sans-serif",
    secondary: "Montserrat, sans-serif",
    tertiary: "Coustard, sans-serif",
  },
  layout: {
    contentWidth: 1236,
  },
  palette: {
    primary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#c2312c",
      light: "#f6faf4",
      dark: "#091211",
    },
    secondary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#8799ca",
      light: "#c6747f",
      dark: "#eba440",
    },
    tertiary: {
      main: "#f6faf4",
    },
    inputs: {
      main: "#091211",
      light: "#091211",
      dark: "#091211",
    },
    text: {
      primary: "#091211",
      secondary: "#f6faf4",
      content: "#091211",
      tertiary: "#1A2933",
      disabled: "#10355A",
      hint: "#10355A",
      light: "rgba(9, 18, 17, 0.75)",
    },
    alternate: {
      main: "rgb(247, 249, 250)",
      dark: "#e8eaf6",
    },
  },
  typography: {
    fontFamily: `"Kanit","Coustard","Montserrat", "Open Sans", "Arial", sans-serif`,
  },
})

export default theme
