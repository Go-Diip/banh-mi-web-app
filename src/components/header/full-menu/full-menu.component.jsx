import React from "react"
import * as S from "./full-menu.styles"
import Fade from "@mui/material/Fade"
import RowGrid from "../../row-grid/row-grid.component"
import { graphql, useStaticQuery } from "gatsby"

const FullMenu = ({ isActive, closeOpenMenu, isHome }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      menu: file(relativePath: { eq: "full-menu.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  const sliderImages = [
    { image: staticQuery.menu },
    { image: staticQuery.menu },
    { image: staticQuery.menu },
    { image: staticQuery.menu },
  ]
  return (
    <Fade in={isActive} mountOnEnter unmountOnExit>
      <S.MenuWrapper>
        <RowGrid isSlider sliderImages={sliderImages} image={staticQuery.menu}>
          <S.Wrapper>
            <S.Pepper />
            <S.ItemsWrapper>
              {isHome ? (
                <>
                  <S.CSLink href="/" onClick={closeOpenMenu}>
                    <S.MenuItem>Home</S.MenuItem>
                  </S.CSLink>
                  <S.CSLink href="/menu/" onClick={closeOpenMenu}>
                    <S.MenuItem>Menú</S.MenuItem>
                  </S.CSLink>
                  <S.SLink
                    to="reservation"
                    smooth={true}
                    duration={1000}
                    onClick={closeOpenMenu}
                  >
                    <S.MenuItem>reservaciones</S.MenuItem>
                  </S.SLink>
                  <S.SLink
                    to="reservation"
                    smooth={true}
                    duration={1000}
                    onClick={closeOpenMenu}
                  >
                    <S.MenuItem>ordena online</S.MenuItem>
                  </S.SLink>
                  <S.SLink
                    to="contact"
                    smooth={true}
                    duration={1000}
                    onClick={closeOpenMenu}
                  >
                    <S.MenuItem>eventos privados</S.MenuItem>
                  </S.SLink>
                  <S.SLink
                    to="reservation"
                    smooth={true}
                    duration={1000}
                    onClick={closeOpenMenu}
                  >
                    <S.MenuItem>contacto</S.MenuItem>
                  </S.SLink>
                </>
              ) : (
                <S.CSLink href="/">
                  <S.MenuItem>Home</S.MenuItem>
                </S.CSLink>
              )}
            </S.ItemsWrapper>
          </S.Wrapper>
        </RowGrid>
      </S.MenuWrapper>
    </Fade>
  )
}

export default FullMenu
