import React from "react"
import * as S from "./row-grid.styles"
import { Grid, useMediaQuery, useTheme } from "@mui/material"
import CommonSlider from "../common-slider/common-slider.component"

const RowGrid = ({
  image,
  isSlider,
  sliderImages,
  children,
  bgColor,
  reverse,
  classSlider,
}) => {
  return (
    <S.Wrapper style={{ background: bgColor }}>
      <Grid container direction={reverse && "row-reverse"}>
        <Grid item xs={12} md={6}>
          {isSlider ? (
            <CommonSlider images={sliderImages} classSlider={classSlider} />
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
