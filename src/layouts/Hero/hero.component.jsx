import React from "react"
import * as S from "./hero.styles"
import RowGrid from "../../components/row-grid/row-grid.component"
import theme from "../../gatsby-theme-material-ui-top-layout/theme"
import Pepper from "../../assets/pepper.svg"
import CustomButton from "../../components/custom-button/custom-button.component"

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
              <S.Button className="lightBorder">Reservas</S.Button>
              <S.Button className="lightBorder">ordena online</S.Button>
            </S.ButtonWrapper>
          </S.ContentWrapper>
        </S.TextWrapper>
      </S.TopWrapper>
    </RowGrid>
  )
}

export default Hero
