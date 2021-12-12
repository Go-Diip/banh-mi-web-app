import React, { useEffect, useState } from "react"
import * as S from "./menu-modal.styles"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "@mui/material"
import MenuItems from "../menu-items/menu-items.component"

const MenuModal = ({}) => {
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
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `)
  const articles = staticQuery.allWpProduct.nodes
  const postsCategories = staticQuery.allWpProductCategory.edges

  const [category, setCategory] = useState("burguers")
  const [categoryTitle, setCategoryTitle] = useState("Banh Mi Burguers")

  const handleChangeCategories = node => {
    setCategory(node.slug)
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
    if (category) {
      articles.map(item => {
        item.productCategories.nodes.map(({ slug }) => {
          if (slug === category) {
            filteredPosts.push(item)
          } else if (category === "all") {
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
        <Container>
          <S.ItemsWrapper>
            {postsCategories.map(({ node }, index) => (
              <S.MenuCategory
                className={node.slug === category && "active"}
                onClick={() => handleChangeCategories(node)}
                key={`item-select-${index}`}
              >
                {node.name}
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
