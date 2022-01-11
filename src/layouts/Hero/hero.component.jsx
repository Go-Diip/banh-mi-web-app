import React from "react"
import * as S from "./hero.styles"
import { InfoWrapper } from "./hero.styles"
import { Fade } from "react-awesome-reveal"

const Hero = ({ title }) => {
  return (
    <S.CustomParallax
      bgImage="https://admin-banhmi.godiip.com/wp-content/uploads/2022/01/hero-1.jpg"
      strength={300}
    >
      <S.TopWrapper>
        {/*<S.Pepper />*/}
        <S.CustomContainer maxWidth="xl">
          <Fade triggerOnce duration={1300}>
            <S.ContentWrapper>
              <S.LogoVertical />
              {/*<S.Title>{title}</S.Title>*/}
              <S.ButtonWrapper>
                <S.Button className="lightBorderWhite" href="/reservations/">
                  reservaciones
                </S.Button>
                <S.Button className="lightBorderWhite">ordena online</S.Button>
              </S.ButtonWrapper>
            </S.ContentWrapper>
          </Fade>
        </S.CustomContainer>
      </S.TopWrapper>
    </S.CustomParallax>
  )
}

export default Hero
