import React from "react"
import * as S from "./hero.styles"

const Hero = ({ title }) => {
  return (
    <S.CustomParallax
      bgImage="https://admin-banhmi.godiip.com/wp-content/uploads/2021/12/07_kanikama.jpg"
      strength={300}
    >
      <S.TopWrapper>
        <S.Icon src="https://admin-rr.aftershock.agency/wp-content/uploads/2021/12/Comp_2.gif" />
        <S.CustomContainer maxWidth="xl">
          <S.ContentWrapper>
            <S.Logo />
            <S.Title>{title}</S.Title>
            <S.ButtonWrapper>
              <S.Button className="lightBorder" href="/reservations/">
                reservaciones
              </S.Button>
              <S.Button className="lightBorder">ordena online</S.Button>
            </S.ButtonWrapper>
          </S.ContentWrapper>
        </S.CustomContainer>
      </S.TopWrapper>
    </S.CustomParallax>
  )
}

export default Hero
