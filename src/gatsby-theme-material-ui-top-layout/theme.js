import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  navHeight: 74,
  sectionPadding: "padding-top: 1.5em; padding-bottom: 1.5em;",
  fonts: {
    primary: "Kanit, sans-serif",
    secondary: "Bebas Neue, sans-serif",
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
      main: "#2C9ED0",
    },
    text: {
      primary: "#091211",
      secondary: "#f6faf4",
      content: "#091211",
      tertiary: "#1A2933",
      disabled: "#10355A",
      hint: "#10355A",
      light: "#FFFFFF",
    },
    alternate: {
      main: "rgb(247, 249, 250)",
      dark: "#e8eaf6",
    },
  },
  typography: {
    fontFamily: `"Kanit", "Open Sans", "Arial", sans-serif`,
  },
})

export default theme
