import React, { useState } from "react"
import * as S from "./header.styles.jsx"
import { Box, useScrollTrigger, useTheme, Fade } from "@mui/material"
import Container from "@mui/material/Container"
import { Spin as Hamburger } from "hamburger-react"
import FullMenu from "./full-menu/full-menu.component"

const Header = ({}) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false)

  const handleCloseMenu = () => {
    setIsActiveMenu(!isActiveMenu)
  }

  return (
    <S.NavWrapper>
      <S.CustomAppBar id="mainNav" position="fixed" elevation={0}>
        <S.MainNav>
          <Container maxWidth="xl">
            <S.MainNavContainer>
              <S.MenuButton>
                <Hamburger
                  toggled={isActiveMenu}
                  toggle={setIsActiveMenu}
                  color={isActiveMenu ? "#091211" : "#F6FAF4"}
                />
              </S.MenuButton>
            </S.MainNavContainer>
          </Container>
        </S.MainNav>
      </S.CustomAppBar>
      <FullMenu closeOpenMenu={handleCloseMenu} isActive={isActiveMenu} />
    </S.NavWrapper>
  )
}
export default Header
