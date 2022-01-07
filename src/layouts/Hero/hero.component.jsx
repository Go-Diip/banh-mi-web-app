import React from "react"
import * as S from "./hero.styles"
import { InfoWrapper } from "./hero.styles"

const Hero = ({ title }) => {
  return (
    <S.CustomParallax
      bgImage="https://admin-banhmi.godiip.com/wp-content/uploads/2022/01/hero.png"
      strength={300}
    >
      <S.TopWrapper>
        <S.Pepper />
        <S.CustomContainer maxWidth="xl">
          <S.ContentWrapper>
            <S.LogoVertical />
            <S.Title>{title}</S.Title>
            <S.ButtonWrapper>
              <S.Button className="lightBorderBlack" href="/reservations/">
                reservaciones
              </S.Button>
              <S.Button className="lightBorderBlack">ordena online</S.Button>
            </S.ButtonWrapper>
          </S.ContentWrapper>
        </S.CustomContainer>
      </S.TopWrapper>
    </S.CustomParallax>
  )
}

export default Hero
