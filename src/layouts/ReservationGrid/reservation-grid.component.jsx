import React from "react"
import * as S from "./reservation-grid.styles"
import Pepper from "../../assets/pepper.svg"
import CustomButton from "../../components/custom-button/custom-button.component"
import RowGrid from "../../components/row-grid/row-grid.component"
import theme from "../../gatsby-theme-material-ui-top-layout/theme"

const ReservationGrid = ({ image, title, numDesc, number, button }) => {
  console.log(title)
  return (
    <RowGrid image={image} bgColor={theme.palette.primary.dark}>
      <S.TopWrapper>
        <S.PepperBg />
        <S.TextWrapper>
          <S.ContentWrapper>
            <Pepper />
            {title && <S.Title>{title}</S.Title>}
            {numDesc && number && (
              <S.Desc>
                {numDesc}
                <S.Number href="">{number}</S.Number>
              </S.Desc>
            )}
            <CustomButton className="lightBorder" href={button?.url}>
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
