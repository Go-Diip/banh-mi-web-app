import React from "react"
import * as S from "./widget-header.styles.jsx"
import Logo from "../../../assets/logo-red.svg"
import PoweredBy from "../../../assets/poweredby-dark.svg"
import GatsbyLink from "gatsby-link"

const WidgetHeader = () => {
  return (
    <S.Wrapper>
      <GatsbyLink to="/">
        <Logo />
      </GatsbyLink>
      <PoweredBy />
    </S.Wrapper>
  )
}
export default WidgetHeader
