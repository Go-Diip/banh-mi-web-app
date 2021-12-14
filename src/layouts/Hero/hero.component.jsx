import React from "react"
import * as S from "./hero.styles"
import RowGrid from "../../components/row-grid/row-grid.component"
import theme from "../../gatsby-theme-material-ui-top-layout/theme"

const Hero = ({ image, logo, title, reservationButton, orderButton }) => {
  return (
    <RowGrid image={image} bgColor={theme.palette.primary.dark}>
      <S.TopWrapper>
        <S.PepperBg />
        <S.TextWrapper>
          <S.ContentWrapper>
            <S.Logo img={logo} />
            <S.Title>{title}</S.Title>
            <S.ButtonWrapper>
              <S.Button className="lightBorder" href="/reservations/">
                Reservas
              </S.Button>
              <S.Button className="lightBorder">ordena online</S.Button>
            </S.ButtonWrapper>
          </S.ContentWrapper>
        </S.TextWrapper>
      </S.TopWrapper>
    </RowGrid>
  )
}

export default Hero
