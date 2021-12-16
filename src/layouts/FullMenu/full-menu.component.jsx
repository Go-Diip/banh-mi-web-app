import React, { useEffect, useState } from "react"
import * as S from "./full-menu.styles"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "@mui/material"
import MenuItems from "../../components/menu-items/menu-items.component"

const FullMenu = ({}) => {
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
  const products = staticQuery.allWpProduct.nodes
  const productCategories = staticQuery.allWpProductCategory.nodes

  const [category, setCategory] = useState(productCategories[0])
  const currentCategoryIndex = productCategories.indexOf(category)
  const [categoryTitle, setCategoryTitle] = useState(productCategories[0].name)

  const handleChangeCategories = node => {
    setCategory(node)
    setCategoryTitle(node.name)
  }

  const [productsToShow, setProductsToShow] = useState([])

  useEffect(() => {
    if (products) {
      setProductsToShow(products)
    }
  }, [products])

  useEffect(() => {
    let filteredProducts = []

    if (category && category.slug) {
      products.map(item => {
        item.productCategories.nodes.map(({ slug }) => {
          if (slug === category.slug) {
            filteredProducts.push(item)
          } else if (category.slug === "all") {
            filteredProducts = products
          }
        })
      })
      setProductsToShow(filteredProducts)
    }
  }, [category])
  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <Container>
          <S.ItemsWrapper>
            {productCategories.map((item, index) => (
              <S.MenuCategory
                className={item.slug === category.slug && "active"}
                onClick={() => handleChangeCategories(item)}
                key={`item-select-${index}`}
              >
                {item.name}
              </S.MenuCategory>
            ))}
          </S.ItemsWrapper>
          <MenuItems
            items={productsToShow}
            title={productCategories[currentCategoryIndex].name}
          />
        </Container>
      </S.MenuWrapper>
    </S.Wrapper>
  )
}

export default FullMenu
