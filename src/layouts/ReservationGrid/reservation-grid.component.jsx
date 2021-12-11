import React from "react"
import * as S from "./reservation-grid.styles"
import CommonSlider from "../../components/common-slider/common-slider.component"
import { Grid } from "@mui/material"
import Pepper from "../../assets/pepper.svg"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import RowGrid from "../../components/row-grid/row-grid.component"

const ReservationGrid = ({ image, title, numDesc, number, button }) => {
  return (
    <RowGrid image={image}>
      <S.ContentWrapper>
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
      </S.ContentWrapper>
    </RowGrid>
  )
}

export default ReservationGrid
