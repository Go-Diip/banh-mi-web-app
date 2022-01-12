import React, { useEffect, useState } from "react"
import * as S from "./mobile-menu.styles"
import { Container, FormControl, InputLabel, MenuItem } from "@mui/material"
import MenuItems from "../menu-items/menu-items.component"
import { graphql, useStaticQuery } from "gatsby"

const MobileMenu = ({ productCategories, products }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      allWpProduct {
        nodes {
          id
          title
          product {
            description
            price
            title
            vegan
            spicy
          }
          productCategories {
            nodes {
              name
              slug
            }
          }
        }
      }
      allWpProductCategory {
        nodes {
          name
          slug
        }
      }
    }
  `)

  const [category, setCategory] = React.useState("")
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
              defaultValue={productCategories[0].name}
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
