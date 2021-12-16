import React from "react"
import * as S from "./menu-items.styles"
import { Container, Grid } from "@mui/material"
import parse from "html-react-parser"

const MenuItems = ({ items, title }) => {
  const newItems = items.reverse()
  return (
    <Container>
      <S.MenuWrapper>
        <S.TitleWrapper>
          <S.CategoryTitle>{title}</S.CategoryTitle>
        </S.TitleWrapper>
        <Grid container spacing={8}>
          {newItems.map(({ product }, index) => (
            <Grid item xs={6}>
              <S.ProductWrapper>
                <S.ProductTitle>
                  {product.title} {product.price}
                </S.ProductTitle>
                {product.description && (
                  <S.ProductDescription>
                    {parse(product.description)}
                  </S.ProductDescription>
                )}
              </S.ProductWrapper>
            </Grid>
          ))}
        </Grid>
      </S.MenuWrapper>
    </Container>
  )
}

export default MenuItems
