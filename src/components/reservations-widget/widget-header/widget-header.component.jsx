import React from "react"
import * as S from "./widget-header.styles.jsx"
import PoweredBy from "../../../assets/poweredby-dark.svg"
import { Link } from "gatsby"

const WidgetHeader = () => {
  return (
    <S.Wrapper>
      <Link to="/">
        <S.CustomLogo />
      </Link>
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
