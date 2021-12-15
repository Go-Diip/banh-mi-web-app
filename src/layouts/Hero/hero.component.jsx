import React from "react"
import * as S from "./hero.styles"
import RowGrid from "../../components/row-grid/row-grid.component"
import theme from "../../gatsby-theme-material-ui-top-layout/theme"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "@mui/material"
import CustomButton from "../../components/custom-button/custom-button.component"

const Hero = ({ title }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero3.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)
  return (
    <S.Wrapper img={staticQuery.hero}>
      <S.TopWrapper>
        <S.Icon />
        <S.Logo />
        <S.ButtonWrapper>
          <S.ContentWrapper>
            <S.Title>{title}</S.Title>
            <S.Button className="lightBorder" href="/reservations/">
              reservas
            </S.Button>
            <S.Button className="lightBorder">ordena online</S.Button>
          </S.ContentWrapper>
        </S.ButtonWrapper>
      </S.TopWrapper>
    </S.Wrapper>
  )
}

export default Hero
