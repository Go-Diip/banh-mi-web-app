import React, { useState } from "react"
import * as S from "./header.styles.jsx"
import { Box, useScrollTrigger, useTheme, Fade } from "@mui/material"
import Container from "@mui/material/Container"
import { Spin as Hamburger } from "hamburger-react"

const Header = ({ isTransparent }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false)

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })
  const isDark = scrollTrigger || isTransparent

  const handleToggleMenu = () => {
    setIsActiveMenu(!isActiveMenu)
  }

  return (
    <S.NavWrapper isTransparent={isTransparent}>
      <S.CustomAppBar id="mainNav" position="fixed" elevation={0}>
        <S.MainNav isdark={isDark}>
          <Container maxWidth="xl">
            <S.MainNavContainer>
              <Hamburger />
            </S.MainNavContainer>
          </Container>
        </S.MainNav>
      </S.CustomAppBar>
    </S.NavWrapper>
  )
}
export default Header
