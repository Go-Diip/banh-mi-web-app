import React from "react"
import * as S from "./widget-header.styles.jsx"
import Logo from "../../../assets/logoVertical-dark.svg"
import PoweredBy from "../../../assets/poweredby-dark.svg"
import GatsbyLink from "gatsby-link"

const WidgetHeader = () => {
  return (
    <S.Wrapper>
      <GatsbyLink to="/">
        <Logo style={{ height: "80px", width: "auto" }} />
      </GatsbyLink>
      <a
        href="https://www.godiip.com/?utm_source=banhmi+powered+by+link&utm_medium=link+on+reservations+widget+header&utm_campaign=banhmi+powered+by+link"
        target="_blank"
      >
        <PoweredBy />
      </a>
    </S.Wrapper>
  )
}
export default WidgetHeader
