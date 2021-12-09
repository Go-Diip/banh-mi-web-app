import React from "react"
import * as S from "./menu.styles"
import { Grid } from "@mui/material"
import CommonSlider from "../../components/common-slider/common-slider.component"

const Menu = ({ images }) => {
  return (
    <S.Wrapper>
      <Grid container>
        <Grid item xs={12} md={6}>
          <CommonSlider images={images} />
        </Grid>
        <Grid item xs={12} md={6}>
          <S.RightWrapper>
            <S.Pepper />
          </S.RightWrapper>
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}

export default Menu
