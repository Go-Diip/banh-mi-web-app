import React from "react"
import * as S from "./about-us-section.styles"
import parse from "html-react-parser"
import { Container } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import { Fade } from "react-awesome-reveal"
import { getSrc } from "gatsby-plugin-image"

const AboutUsSection = ({ title, description, chefs, leftImage }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      red: file(relativePath: { eq: "red-section.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)
  return (
    <S.CustomParallax bgImage={getSrc(leftImage?.localFile)} strength={300}>
      <S.ContentWrapper id="about-us">
        {/*<S.PepperIcon />*/}
        <Container style={{ height: "100%" }}>
          <S.TextWrapper>
            <Fade triggerOnce>
              <div>
                <S.WhiteIcon />
                {title && <S.Title>{title}</S.Title>}
                {description && (
                  <S.Description>{parse(description)}</S.Description>
                )}
                {chefs && <S.Chefs>{parse(chefs)}</S.Chefs>}
              </div>
            </Fade>
          </S.TextWrapper>
        </Container>
      </S.ContentWrapper>
    </S.CustomParallax>
  )
}

export default AboutUsSection
