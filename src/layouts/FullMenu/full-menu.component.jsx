import React, { useEffect, useState } from "react"
import * as S from "./full-menu.styles"
import { graphql, useStaticQuery } from "gatsby"
import { Container, useMediaQuery, useTheme } from "@mui/material"
import MenuItems from "../../components/menu-items/menu-items.component"
import VegIcon from "../../assets/veg.svg"
import PepperIcon from "../../assets/chili.svg"
import CustomLink from "../../components/custom-link/custom-link.component"
import MobileMenu from "../../components/mobile-menu/mobile-menu.component"

const FullMenu = ({ title }) => {
  const theme = useTheme()
  const isLg = useMediaQuery(theme.breakpoints.down("lg"))

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
  const products = staticQuery.allWpProduct.nodes
  const productCategories = staticQuery.allWpProductCategory.nodes

  let newProductCategories = []
  newProductCategories.push(productCategories[5])
  newProductCategories.push(productCategories[9])
  newProductCategories.push(productCategories[8])
  newProductCategories.push(productCategories[7])
  newProductCategories.push(productCategories[6])
  newProductCategories.push(productCategories[12])
  newProductCategories.push(productCategories[1])
  newProductCategories.push(productCategories[0])
  newProductCategories.push(productCategories[10])
  newProductCategories.push(productCategories[11])
  newProductCategories.push(productCategories[2])
  newProductCategories.push(productCategories[4])
  newProductCategories.push(productCategories[3])
  newProductCategories.push(productCategories[13])

  let desktopCategories = []

  for (let i = 0; i < newProductCategories.length - 4; i++) {
    desktopCategories.push(newProductCategories[i])
  }

  // desktopCategories.push(newProductCategories[0])

  // console.log(desktopCategories)

  const [category, setCategory] = useState(desktopCategories[0])
  const currentCategoryIndex = desktopCategories.indexOf(category)
  const [categoryTitle, setCategoryTitle] = useState(
    newProductCategories[0].name
  )

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
    <>
      {!isLg ? (
        <S.Wrapper>
          <S.TitleWrapper>{title && <h1>{title}</h1>}</S.TitleWrapper>
          <S.BarWrapper>
            <Container maxWidth="xl">
              <S.Link url="/">
                <S.ButtonWrapper>
                  <S.ArrowIcon />
                  <S.HomeText>Inicio</S.HomeText>
                </S.ButtonWrapper>
              </S.Link>
            </Container>
          </S.BarWrapper>
          <S.MenuWrapper>
            <Container>
              <S.ItemsWrapper>
                {desktopCategories.map((item, index) => (
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
                title={newProductCategories[currentCategoryIndex]?.name}
              />
              <S.OptionsWrapper>
                <S.IconsWrapper>
                  <S.OptionWrapper>
                    <VegIcon />
                    <S.Description>Opciones Veganas</S.Description>
                  </S.OptionWrapper>
                  <S.OptionWrapper>
                    <PepperIcon />
                    <S.Description>Escoge tu nivel de picante</S.Description>
                  </S.OptionWrapper>
                </S.IconsWrapper>
                <S.Line />
                <S.DescWrapper>
                  <S.Description>
                    Todos nuestros precios incluyen I.V.A.
                  </S.Description>
                </S.DescWrapper>
                <S.Line />
              </S.OptionsWrapper>
            </Container>
          </S.MenuWrapper>
        </S.Wrapper>
      ) : (
        <MobileMenu
          productCategories={newProductCategories}
          products={products}
        />
      )}
    </>
  )
}

export default FullMenu
