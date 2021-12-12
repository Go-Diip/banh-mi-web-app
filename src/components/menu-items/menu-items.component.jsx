import React from "react"
import * as S from "./menu-items.styles"
import { Container, Grid } from "@mui/material"

const MenuItems = ({ items, title }) => {
  console.log(items)
  return (
    <Container>
      <S.TitleWrapper>
        <S.CategoryTitle>{title}</S.CategoryTitle>
      </S.TitleWrapper>
      <Grid container spacing={2}>
        {items.map(({ product }, index) => (
          <Grid item xs={6}>
            <S.ProductWrapper>
              <S.ProductTitle>
                {product.title} {product.price}
              </S.ProductTitle>
              {product.description && (
                <S.ProductDescription>
                  {product.description}
                </S.ProductDescription>
              )}
            </S.ProductWrapper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default MenuItems
