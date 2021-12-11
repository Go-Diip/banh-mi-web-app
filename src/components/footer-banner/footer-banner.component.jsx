import React from "react"
import * as S from "./footer-banner.styles"
import { Container } from "@mui/material"
import CustomButton from "../custom-button/custom-button.component"

const FooterBanner = () => {
  return (
    <S.Wrapper>
      <S.MiddlePepper />
      <Container style={{ height: "100%" }}>
        <S.BannerWrapper>
          <S.TextWrapper>
            <S.BannerTitle>Eventos privados</S.BannerTitle>
            <S.BannerDescription>
              Reserva un espacio para eventos privados o para reservaciones de
              mas de 12 personas
            </S.BannerDescription>
          </S.TextWrapper>
          <CustomButton className="lightBorder">Contactanos</CustomButton>
        </S.BannerWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default FooterBanner
