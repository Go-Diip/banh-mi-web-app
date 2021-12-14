import React, { useEffect, useState } from "react"
import * as S from "./menu-modal.styles"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "@mui/material"
import MenuItems from "../menu-items/menu-items.component"

const MenuModal = ({ close }) => {
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

  const articles = staticQuery.allWpProduct.nodes
  const postsCategories = staticQuery.allWpProductCategory.nodes

  const [category, setCategory] = useState(postsCategories[0])
  const currentCategoryIndex = postsCategories.indexOf(category)
  const [categoryTitle, setCategoryTitle] = useState(postsCategories[0].name)

  const handleChangeCategories = node => {
    setCategory(node)
    setCategoryTitle(node.name)
  }
  const [articlesToShow, setArticlesToShow] = useState([])

  useEffect(() => {
    if (articles) {
      setArticlesToShow(articles)
    }
  }, [articles])

  useEffect(() => {
    let filteredPosts = []

    if (category && category.slug) {
      articles.map(item => {
        item.productCategories.nodes.map(({ slug }) => {
          if (slug === category.slug) {
            filteredPosts.push(item)
          } else if (category.slug === "all") {
            filteredPosts = articles
          }
        })
      })
      setArticlesToShow(filteredPosts)
    }
  }, [category])

  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <S.Pepper />
        <S.Close onClick={close} />
        <S.LeftArrow
          onClick={() =>
            setCategory(
              currentCategoryIndex > 0
                ? postsCategories[currentCategoryIndex - 1]
                : postsCategories[postsCategories.length - 1]
            )
          }
        />
        <S.RightArrow
          onClick={() =>
            setCategory(
              currentCategoryIndex < postsCategories.length - 1
                ? postsCategories[currentCategoryIndex + 1]
                : postsCategories[0]
            )
          }
        />
        <Container>
          <S.ItemsWrapper>
            {postsCategories.map((item, index) => (
              <S.MenuCategory
                className={item.slug === category.slug && "active"}
                onClick={() => handleChangeCategories(item)}
                key={`item-select-${index}`}
              >
                {item.name}
              </S.MenuCategory>
            ))}
          </S.ItemsWrapper>
          <MenuItems items={articlesToShow} title={categoryTitle} />
        </Container>
      </S.MenuWrapper>
    </S.Wrapper>
  )
}

export default MenuModal
