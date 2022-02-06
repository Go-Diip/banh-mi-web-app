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
      allWpProduct(sort: { fields: date, order: ASC }) {
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
    }
  `)

  const products = staticQuery.allWpProduct.nodes

  const productCategories = [
    { name: "Combinaciones", slug: "combinaciones" },
    { name: "Platos Pequeños", slug: "platos-pequenos" },
    { name: "Platos Medianos", slug: "platos-medianos" },
    { name: "Parrilla", slug: "parrilla" },
    { name: "Para Compartir", slug: "para-compartir" },
    { name: "Sopas y Noodles", slug: "sopas-noodles" },
    { name: "Baos y Rollos", slug: "baos-rollos" },
    { name: "Banh Mis/Burguers", slug: "burguers" },
    { name: "Porciones", slug: "porciones" },
    { name: "Postres", slug: "postres" },
    { name: "Bebidas Soft", slug: "bebidas-soft" },
    { name: "Cervezas", slug: "cervezas" },
    { name: "Cocteles", slug: "cocteles" },
    { name: "Vinos", slug: "vinos" },
  ]

  //Array para desktop
  let desktopCategories = []

  for (let i = 0; i <= productCategories.length - 5; i++) {
    desktopCategories.push(productCategories[i])
  }

  //agrego la categoria para bebidas
  desktopCategories.push({ name: "Bebidas", slug: "bebidas" })

  //Array para las bebidas y sus categorias
  let drinksCategories = []

  drinksCategories.push(productCategories[productCategories.length - 4])
  drinksCategories.push(productCategories[productCategories.length - 3])
  drinksCategories.push(productCategories[productCategories.length - 2])
  drinksCategories.push(productCategories[productCategories.length - 1])

  const [category, setCategory] = useState(desktopCategories[0])
  const currentCategoryIndex = desktopCategories.indexOf(category)
  const [categoryTitle, setCategoryTitle] = useState(desktopCategories[0].name)

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
                items={categoryTitle === "Bebidas" ? products : productsToShow}
                title={categoryTitle}
                drinksCategories={drinksCategories}
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
        <>
          <MobileMenu
            productCategories={productCategories}
            products={products}
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
        </>
      )}
    </>
  )
}

export default FullMenu
