import React from "react"
import * as S from "./row-grid.styles"
import { Grid } from "@mui/material"
import CommonSlider from "../common-slider/common-slider.component"

const RowGrid = ({ image, isSlider, sliderImages, children, bgColor }) => {
  return (
    <S.Wrapper style={{ background: bgColor }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          {isSlider ? (
            <CommonSlider images={sliderImages} />
          ) : (
            <S.Image img={image} />
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          {children}
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}

export default RowGrid
