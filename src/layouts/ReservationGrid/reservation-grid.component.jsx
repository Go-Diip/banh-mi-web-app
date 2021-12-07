import React from "react"
import * as S from "./reservation-grid.styles"
import CommonSlider from "../../components/common-slider/common-slider.component"
import { Grid } from "@mui/material"
import Pepper from "../../assets/pepper.svg"
import CustomButton from "../../components/custom-button/custom-button.component"

const ReservationGrid = ({ images, title, numDesc, num, button }) => {
  return (
    <S.Wrapper>
      <Grid container>
        <Grid item xs={12} md={6}>
          <CommonSlider images={images} />
        </Grid>
        <S.RightGrid item xs={12} md={6}>
          <S.ContentWrapper>
            <S.ContentWrapper>
              <Pepper />
              {title && <S.Title>{title}</S.Title>}
              {numDesc && num && (
                <S.Desc>
                  {numDesc}
                  <S.Number href="">{num}</S.Number>
                </S.Desc>
              )}
              <CustomButton className="lightBorder" href={button?.url}>
                {button?.title}
              </CustomButton>
              <S.PoweredIcon />
            </S.ContentWrapper>
          </S.ContentWrapper>
        </S.RightGrid>
      </Grid>
    </S.Wrapper>
  )
}

export default ReservationGrid
