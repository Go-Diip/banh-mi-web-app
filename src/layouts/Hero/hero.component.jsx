import React, { useContext } from "react"
import * as S from "./hero.styles"
import { graphql, useStaticQuery } from "gatsby"
import PepperIcon from "../../assets/pepper-red.svg"
import { ThemeContext } from "../../provider"
import { sendGtagOrderOnlineEvent } from "../../gtag-utils"

const Hero = ({ title }) => {
  const { hasLoadedOnce } = useContext(ThemeContext)

  const staticQuery = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "red-bg-new.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <S.Circle>
        <S.Pepper>
          <div />
          <PepperIcon />
        </S.Pepper>
      </S.Circle>
      <S.BgImage img={staticQuery.bg} tag="div">
        <S.TopWrapper>
          {/*<S.Pepper />*/}
          <S.CustomContainer maxWidth="xl">
            <S.ContentWrapper>
              <S.LogoVertical />
              {/*<S.Title>{title}</S.Title>*/}
              <S.ButtonWrapper>
                <S.Button className="lightBorderWhite" href="/reservaciones/">
                  reservaciones
                </S.Button>
                {/*<S.Button*/}
                {/*  className="lightBorderWhite"*/}
                {/*  href="https://api.whatsapp.com/send?phone=593997702994&text=Hola!%20Quisiera%20realizar%20una%20reserva,%20un%20pedido"*/}
                {/*  target="_blank"*/}
                {/*>*/}
                {/*  reservaciones*/}
                {/*</S.Button>*/}
                <S.Button
                  className="lightBorderWhite"
                  onClick={sendGtagOrderOnlineEvent}
                  href="https://www.rappi.com.ec/restaurantes/17168-banh-mi"
                  target="_blank"
                >
                  ordenar online
                </S.Button>
              </S.ButtonWrapper>
            </S.ContentWrapper>
          </S.CustomContainer>
        </S.TopWrapper>
      </S.BgImage>
    </S.Wrapper>
  )
}

export default Hero
