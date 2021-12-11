import React from "react"
import * as S from "./about-us-section.styles"
import parse from "html-react-parser"
import RowGrid from "../../components/row-grid/row-grid.component"

const AboutUsSection = ({ title, description, chefs, leftImage }) => {
  return (
    <RowGrid image={leftImage} bgColor="#C2312C">
      <S.ContentWrapper>
        <S.PepperIcon />
        <S.TextWrapper>
          {title && <S.Title>{title}</S.Title>}
          {description && <S.Description>{parse(description)}</S.Description>}
          {chefs && <S.Chefs>{parse(chefs)}</S.Chefs>}
        </S.TextWrapper>
      </S.ContentWrapper>
    </RowGrid>
  )
}

export default AboutUsSection
