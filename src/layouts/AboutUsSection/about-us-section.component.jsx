import React from "react"
import * as S from "./about-us-section.styles"
import parse from "html-react-parser"
import RowGrid from "../../components/row-grid/row-grid.component"
import theme from "../../gatsby-theme-material-ui-top-layout/theme"
import { Container } from "@mui/material"

const AboutUsSection = ({ title, description, chefs, leftImage }) => {
  return (
    <RowGrid image={leftImage} bgColor={theme.palette.primary.main}>
      <S.ContentWrapper>
        <S.PepperIcon />
        <Container style={{ height: "100%" }}>
          <S.TextWrapper>
            {title && <S.Title>{title}</S.Title>}
            {description && <S.Description>{parse(description)}</S.Description>}
            {chefs && <S.Chefs>{parse(chefs)}</S.Chefs>}
          </S.TextWrapper>
        </Container>
      </S.ContentWrapper>
    </RowGrid>
  )
}

export default AboutUsSection
