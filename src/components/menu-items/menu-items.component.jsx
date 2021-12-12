import React from "react"
import * as S from "./menu-items.styles"
import { Container, Grid } from "@mui/material"

const MenuItems = ({ items, title }) => {
  console.log(items)
  return (
    <Container>
      <h1>{title}</h1>
      <Grid container spacing={4}>
        {items.map(({ product }, index) => (
          <Grid item xs={6}>
            <S.ProductWrapper>
              <S.ProductTitle>
                {product.title} {product.price}
              </S.ProductTitle>
              <S.ProductDescription>{product.description}</S.ProductDescription>
            </S.ProductWrapper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default MenuItems
