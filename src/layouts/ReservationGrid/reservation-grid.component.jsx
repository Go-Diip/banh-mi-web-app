import React from "react"
import * as S from "./reservation-grid.styles"
import CommonSlider from "../../components/common-slider/common-slider.component"
import { Grid } from "@mui/material"

const ReservationGrid = ({ images }) => {
  return (
    <S.Wrapper>
      <Grid container>
        <Grid item xs={12} md={6}>
          <CommonSlider images={images} />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </S.Wrapper>
  )
}

export default ReservationGrid
