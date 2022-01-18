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
      <PoweredBy />
    </S.Wrapper>
  )
}
export default WidgetHeader
