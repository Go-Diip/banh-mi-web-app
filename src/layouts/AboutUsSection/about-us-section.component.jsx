import React from "react"
import * as S from "./about-us-section.styles"
import parse from "html-react-parser"
import RowGrid from "../../components/row-grid/row-grid.component"
import theme from "../../gatsby-theme-material-ui-top-layout/theme"
import { Container } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import { Fade } from "react-awesome-reveal"

const AboutUsSection = ({ title, description, chefs, leftImage }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      red: file(relativePath: { eq: "red.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)
  return (
    <RowGrid image={leftImage} bgColor={theme.palette.primary.main}>
      <S.BgImage img={staticQuery.red}>
        <S.ContentWrapper id="about-us">
          <S.PepperIcon />
          <Container style={{ height: "100%" }}>
            <S.TextWrapper>
              <Fade>
                {title && <S.Title>{title}</S.Title>}
                {description && (
                  <S.Description>{parse(description)}</S.Description>
                )}
                {chefs && <S.Chefs>{parse(chefs)}</S.Chefs>}
              </Fade>
            </S.TextWrapper>
          </Container>
        </S.ContentWrapper>
      </S.BgImage>
    </RowGrid>
  )
}

export default AboutUsSection
