import React from "react"
import * as S from "./widget-header.styles.jsx"
import Logo from "../../../assets/logo-red.svg"
import PoweredBy from "../../../assets/poweredby-dark.svg"

const WidgetHeader = () => {
  return (
    <S.Wrapper>
      <Logo />
      <PoweredBy />
    </S.Wrapper>
  )
}
export default WidgetHeader
