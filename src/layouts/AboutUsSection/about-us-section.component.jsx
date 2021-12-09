import React from "react"
import * as S from "./about-us-section.styles"
import { Container, Grid } from "@mui/material"
import CustomImage from "../../components/custom-image/custom-image.component"
import parse from "html-react-parser"

const AboutUsSection = ({ title, description, chefs, leftImage }) => {
  return (
    <S.Wrapper>
      <Grid container>
        <Grid item xs={12} md={6}>
          <CustomImage img={leftImage} />
        </Grid>
        <Grid item xs={12} md={6}>
          <S.CustomContainer>
            <S.ContentWrapper>
              <S.PepperIcon />
              <S.TextWrapper>
                {title && <S.Title>{title}</S.Title>}
                {description && (
                  <S.Description>{parse(description)}</S.Description>
                )}
                {chefs && <S.Chefs>{parse(chefs)}</S.Chefs>}
              </S.TextWrapper>
            </S.ContentWrapper>
          </S.CustomContainer>
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}

export default AboutUsSection
