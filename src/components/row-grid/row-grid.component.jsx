import React from "react"
import * as S from "./row-grid.styles"

const RowGrid = ({ image, children, bgColor }) => {
  return (
    <S.Wrapper style={{ background: bgColor }}>
      <S.CustomGrid container>
        <S.CustomGrid item xs={12} md={6}>
          <S.Image img={image} />
        </S.CustomGrid>
        <S.CustomGrid item xs={12} md={6}>
          {children}
        </S.CustomGrid>
      </S.CustomGrid>
    </S.Wrapper>
  )
}

export default RowGrid
