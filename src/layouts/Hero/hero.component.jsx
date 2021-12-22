import React from "react"
import * as S from "./hero.styles"

const Hero = ({ title }) => {
  return (
    <S.CustomParallax
      bgImage="https://admin-banhmi.godiip.com/wp-content/uploads/2021/12/hero-2@2x-min-scaled.jpg"
      strength={300}
    >
      <S.TopWrapper>
        <S.Icon />
        <S.CustomContainer maxWidth="xl">
          <S.ContentWrapper>
            <S.Logo />
            <S.Title>{title}</S.Title>
            <S.Button className="lightBorder" href="/reservations/">
              reservaciones
            </S.Button>
            <S.Button className="lightBorder">ordena online</S.Button>
          </S.ContentWrapper>
        </S.CustomContainer>
      </S.TopWrapper>
    </S.CustomParallax>
  )
}

export default Hero
