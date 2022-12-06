import React from "react"
import * as S from "./full-menu.styles"
import { graphql, useStaticQuery } from "gatsby"
import { sendGtagOrderOnlineEvent } from "../../../gtag-utils"

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

  return (
    <S.MenuWrapper isactive={isActive}>
      <S.Wrapper>
        {/*<S.Pepper />*/}
        <S.ItemsWrapper>
          {isHome ? (
            <>
              <S.CSLink href="/" onClick={closeOpenMenu}>
                <S.MenuItem>Inicio</S.MenuItem>
              </S.CSLink>
              <S.SLink to='promos-cocktails' smooth={true} duration={1000} onClick={closeOpenMenu}>
                <S.MenuItem>Menú</S.MenuItem>
              </S.SLink>
              <S.CSLink href="/reservaciones/">
                <S.MenuItem>reservaciones</S.MenuItem>
              </S.CSLink>
              <S.CSLink
                onClick={sendGtagOrderOnlineEvent}
                href="https://www.rappi.com.ec/restaurantes/17168-banh-mi"
                target="_blank"
              >
                <S.MenuItem>Ordenar Online</S.MenuItem>
              </S.CSLink>
              <S.SLink
                to="eventos-privados"
                smooth={true}
                duration={1000}
                offset={-100}
                onClick={closeOpenMenu}
              >
                <S.MenuItem>eventos privados</S.MenuItem>
              </S.SLink>
              <S.SLink
                to="ordena-online"
                smooth={true}
                duration={1000}
                onClick={closeOpenMenu}
              >
                <S.MenuItem>contacto</S.MenuItem>
              </S.SLink>
            </>
          ) : (
            <>
              <S.CSLink href="/">
                <S.MenuItem>Inicio</S.MenuItem>
              </S.CSLink>
              {/*<S.CSLink href="https://api.whatsapp.com/send?phone=593997702994&text=Hola!%20Quisiera%20realizar%20una%20reserva,%20un%20pedido">*/}
              {/*  <S.MenuItem>Reservaciones</S.MenuItem>*/}
              {/*</S.CSLink>*/}
              <S.CSLink href="/reservaciones/">
                <S.MenuItem>Reservaciones</S.MenuItem>
              </S.CSLink>
              <S.CSLink
                onClick={sendGtagOrderOnlineEvent}
                href="https://www.rappi.com.ec/restaurantes/17168-banh-mi"
                target="_blank"
              >
                <S.MenuItem>Ordena Online</S.MenuItem>
              </S.CSLink>
            </>
          )}
        </S.ItemsWrapper>
      </S.Wrapper>
    </S.MenuWrapper>
  )
}

export default FullMenu
