import React from "react"
import * as S from "./menu-items.styles"
import { Container, Grid, useTheme } from "@mui/material"
import parse from "html-react-parser"
import VegIcon from "../../assets/veg.svg"
import PepperIcon from "../../assets/chili.svg"
import MobileMenu from "../mobile-menu/mobile-menu.component"
import DropdownMenu from "../dropdown-menu/dropdown-menu.component"
import useMediaQuery from "@mui/material/useMediaQuery"

const MenuItems = ({ items, title, drinksCategories }) => {
  // const newItems = items.reverse()
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Container>
      {title === "Bebidas" ? (
        <DropdownMenu productCategories={drinksCategories} products={items} />
      ) : (
        <S.MenuWrapper>
          <S.TitleWrapper>
            <S.CategoryTitle>{title}</S.CategoryTitle>
          </S.TitleWrapper>
          <Grid
            container
            spacing={
              title === "Postres" ||
              (title === "Porciones" || title === "Bebidas Soft" || isSm
                ? 2
                : 8)
            }
          >
            {items.map(({ product }, index) => (
              <Grid
                item
                xs={12}
                md={
                  title === "Postres" ||
                  title === "Porciones" ||
                  title === "Bebidas Soft"
                    ? 12
                    : 6
                }
              >
                <S.ProductWrapper>
                  <S.ProductTitle
                    style={{
                      textAlign:
                        title === "Postres" ||
                        title === "Porciones" ||
                        title === "Bebidas Soft"
                          ? "center"
                          : "left",
                      marginBottom:
                        title === "Postres" ||
                        title === "Porciones" ||
                        title === "Bebidas Soft"
                          ? "0"
                          : "0.5em",
                    }}
                  >
                    {product.title} {product.price}
                    {product.spicy ||
                      (product.vegan && (
                        <S.ItemsWrapper>
                          {product.spicy && <PepperIcon />}
                          {product.vegan && <VegIcon />}
                        </S.ItemsWrapper>
                      ))}
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
      )}
    </Container>
  )
}

export default MenuItems
