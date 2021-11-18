import React from "react"
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout"

import { useMediaQuery } from "@mui/material"
import { GlobalStyles } from "../../styles/app.styles"

export default function TopLayout({ children, theme }) {
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })
  let navHeight = theme.navHeight
  let sectionPadding = theme.sectionPadding

  if (isMd) {
    navHeight = 0
    sectionPadding = "padding-top: 5em; padding-bottom: 5em;"
  }

  return (
    <ThemeTopLayout theme={{ ...theme, navHeight, sectionPadding }}>
      <GlobalStyles />
      {children}
    </ThemeTopLayout>
  )
}
