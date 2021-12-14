import React from "react"
import * as S from "./full-menu.styles"
import Fade from "@mui/material/Fade"
import RowGrid from "../../row-grid/row-grid.component"
import { graphql, useStaticQuery } from "gatsby"

const FullMenu = ({ isActive, closeOpenMenu }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      menu: file(relativePath: { eq: "full-menu.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <Fade in={isActive} mountOnEnter unmountOnExit>
      <S.MenuWrapper>
        <RowGrid image={staticQuery.menu}>
          <S.Wrapper>
            <S.Pepper />
            <S.ItemsWrapper>
              <S.SLink
                to="menu"
                smooth={true}
                duration={1000}
                onClick={closeOpenMenu}
              >
                <S.MenuItem>menu</S.MenuItem>
              </S.SLink>
              <S.SLink
                to="about-us"
                smooth={true}
                duration={1000}
                onClick={closeOpenMenu}
              >
                <S.MenuItem>nosotros</S.MenuItem>
              </S.SLink>
              <S.SLink
                to="contact"
                smooth={true}
                duration={1000}
                onClick={closeOpenMenu}
              >
                <S.MenuItem>contact</S.MenuItem>
              </S.SLink>
              <S.SLink
                to="reservation"
                smooth={true}
                duration={1000}
                onClick={closeOpenMenu}
              >
                <S.MenuItem>reservas</S.MenuItem>
              </S.SLink>
              <S.SLink
                to="reservation"
                smooth={true}
                duration={1000}
                onClick={closeOpenMenu}
              >
                <S.MenuItem>pedir online</S.MenuItem>
              </S.SLink>
              <S.SLink
                to="reservation"
                smooth={true}
                duration={1000}
                onClick={closeOpenMenu}
              >
                <S.MenuItem>contactenos</S.MenuItem>
              </S.SLink>
            </S.ItemsWrapper>
          </S.Wrapper>
        </RowGrid>
      </S.MenuWrapper>
    </Fade>
  )
}

export default FullMenu
