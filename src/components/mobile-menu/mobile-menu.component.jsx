import React, { useEffect, useState } from "react"
import * as S from "./mobile-menu.styles"
import { Container, FormControl, InputLabel, MenuItem } from "@mui/material"
import MenuItems from "../menu-items/menu-items.component"
import { graphql, useStaticQuery } from "gatsby"

const MobileMenu = ({ productCategories, products }) => {
  const [category, setCategory] = React.useState(productCategories[0].slug)
  const handleChangeCategory = event => {
    setCategory(event.target.value)
  }

  const [productsToShow, setProductsToShow] = useState([])

  useEffect(() => {
    if (products) {
      setProductsToShow(productsToShow)
    }
  }, [products])

  useEffect(() => {
    let filteredPosts = []
    if (category) {
      products.map(item => {
        item.productCategories.nodes.map(({ slug }) => {
          if (slug === category) {
            filteredPosts.push(item)
          } else if (category === "see-all") {
            filteredPosts = products
          }
        })
      })
      setProductsToShow(filteredPosts)
    }
  }, [category])

  return (
    <S.Wrapper>
      <S.Hero>
        <h1>MENÚ</h1>
      </S.Hero>
      <Container>
        <S.MenuWrapper>
          <FormControl fullWidth>
            <S.CustomSelect
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={category}
              onChange={handleChangeCategory}
            >
              {productCategories.map(({ name, slug }, index) => (
                <MenuItem key={`item-select-${index}`} value={slug}>
                  {name}
                </MenuItem>
              ))}
            </S.CustomSelect>
          </FormControl>
          <MenuItems items={productsToShow} />
        </S.MenuWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default MobileMenu
