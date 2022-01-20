import React from "react"
import * as S from "./hero.styles"
import { InfoWrapper } from "./hero.styles"
import { Fade } from "react-awesome-reveal"

const Hero = ({ title }) => {
  return (
    <S.CustomParallax
      bgImage="https://admin-banhmi.godiip.com/wp-content/uploads/2022/01/wok.jpg"
      strength={300}
    >
      <S.TopWrapper>
        {/*<S.Pepper />*/}
        <S.CustomContainer maxWidth="xl">
          <S.ContentWrapper>
            <S.LogoVertical />
            {/*<S.Title>{title}</S.Title>*/}
            <S.ButtonWrapper>
              <S.Button className="lightBorderWhite" href="/reservations/">
                reservaciones
              </S.Button>
              <S.Button className="lightBorderWhite">ordenar online</S.Button>
            </S.ButtonWrapper>
          </S.ContentWrapper>
        </S.CustomContainer>
      </S.TopWrapper>
    </S.CustomParallax>
  )
}

export default Hero
