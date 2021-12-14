import React from "react"
import * as S from "./reservation-grid.styles"
import Pepper from "../../assets/pepper.svg"
import CustomButton from "../../components/custom-button/custom-button.component"
import RowGrid from "../../components/row-grid/row-grid.component"
import theme from "../../gatsby-theme-material-ui-top-layout/theme"
import { Modal } from "@mui/material"
import ReservationForm from "../../components/reservation-form/reservation-form.component"
import parse from "html-react-parser"

const ReservationGrid = ({ image, title, numDesc, number, button }) => {
  return (
    <RowGrid image={image} bgColor={theme.palette.primary.dark}>
      <S.TopWrapper id="reservation">
        <S.PepperBg />
        <S.TextWrapper>
          <S.ContentWrapper>
            <Pepper />
            {title && <S.Title>{title}</S.Title>}
            {numDesc && number && (
              <S.Desc>
                {parse(numDesc + "<br>")}

                <S.Number href="tel:+59399 770 2994">099 770 2994</S.Number>
              </S.Desc>
            )}
            <CustomButton className="lightBorder" href="/reservations/">
              {button?.title}
            </CustomButton>
            <S.PoweredIcon />
          </S.ContentWrapper>
        </S.TextWrapper>
      </S.TopWrapper>
    </RowGrid>
  )
}

export default ReservationGrid
