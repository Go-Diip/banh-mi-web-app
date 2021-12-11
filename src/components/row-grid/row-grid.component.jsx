import React from "react"
import * as S from "./row-grid.styles"
import { Grid } from "@mui/material"

const RowGrid = ({ image, children, bgColor }) => {
  return (
    <S.Wrapper style={{ background: bgColor }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <S.Image img={image} />
        </Grid>
        <Grid item xs={12} md={6}>
          {children}
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}

export default RowGrid
