import React from "react"
import * as S from "./dropdown-items.styles"
import { Container, Grid } from "@mui/material"
import parse from "html-react-parser"
import VegIcon from "../../assets/veg.svg"
import PepperIcon from "../../assets/chili.svg"

const DropdownItems = ({ items, title }) => {
  return (
    <Container>
      <S.MenuWrapper>
        <S.TitleWrapper>
          <S.CategoryTitle>{title}</S.CategoryTitle>
        </S.TitleWrapper>
        <Grid
          container
          spacing={
            title === "Postres" ||
            (title === "Porciones" || title === "Bebidas Soft" ? 2 : 8)
          }
        >
          {items.map(({ product }, index) => (
            <Grid item sm={12} md={title === "Bebidas Soft" ? 12 : 6}>
              <S.ProductWrapper>
                <S.ProductTitle
                  style={{
                    textAlign: title === "Bebidas Soft" ? "center" : "left",
                    marginBottom: title === "Bebidas Soft" ? "0" : "0.5em",
                  }}
                >
                  {product.title} {product.price}
                  <S.ItemsWrapper>
                    {product.spicy && <PepperIcon />}
                    {product.vegan && <VegIcon />}
                  </S.ItemsWrapper>
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

export default DropdownItems
