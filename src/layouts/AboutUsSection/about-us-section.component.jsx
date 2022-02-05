import React from "react"
import * as S from "./about-us-section.styles"
import parse from "html-react-parser"
import { Container } from "@mui/material"
import { Fade } from "react-awesome-reveal"
import { getSrc } from "gatsby-plugin-image"

const AboutUsSection = ({ title, description, chefs, leftImage }) => {
  return (
    <S.CustomParallax
      layers={[
        {
          image: getSrc(leftImage?.localFile),
          speed: -20,
        },
      ]}
      style={{ aspectRatio: "2 / 1" }}
    >
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
