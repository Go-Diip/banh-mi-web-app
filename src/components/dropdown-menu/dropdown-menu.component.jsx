import React, { useEffect, useState } from "react"
import * as S from "./dropdown-menu.styles"
import { Container, FormControl, InputLabel, MenuItem } from "@mui/material"
import MenuItems from "../menu-items/menu-items.component"
import { graphql, useStaticQuery } from "gatsby"
import DropdownItems from "../dropdown-items/dropdown-items.component"

const DropdownMenu = ({ productCategories, products }) => {
  const [category, setCategory] = useState(productCategories[0].slug)
  const [title, setTitle] = useState(productCategories[0].name)

  const handleChangeCategory = event => {
    setCategory(event.target.value)
    setTitle(event.target.value.replace("-", " "))
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
      <Container>
        <S.MenuWrapper>
          <FormControl fullWidth>
            <S.FormWrapper>
              <S.SelectWrapper>
                <S.CustomSelect
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={category}
                  onChange={handleChangeCategory}
                  fullWidth
                >
                  {productCategories.map(({ name, slug }, index) => (
                    <MenuItem key={`item-select-${index}`} value={slug}>
                      {name}
                    </MenuItem>
                  ))}
                </S.CustomSelect>
              </S.SelectWrapper>
            </S.FormWrapper>
          </FormControl>
          <DropdownItems items={productsToShow} title={title} />
        </S.MenuWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default DropdownMenu
