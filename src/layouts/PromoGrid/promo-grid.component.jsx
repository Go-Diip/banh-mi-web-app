import React from "react"
import * as S from "./promo-grid.styles"
import Pepper from "../../assets/pepper.svg"
import CustomButton from "../../components/custom-button/custom-button.component"
import RowGrid from "../../components/row-grid/row-grid.component"
import parse from "html-react-parser"
import { Container } from "@mui/material"
import { isBrowser } from "../../utils"

const PromoGrid = ({ images, title, menu, button }) => {
  const downloadFile = fileUrl => {
    if (isBrowser() && fileUrl) {
      const element = document.createElement("a")
      element.setAttribute("href", fileUrl)
      element.setAttribute("target", "_blank")
      element.style.display = "none"
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    }
  }

  return (
    <RowGrid isSlider sliderImages={images} classSlider={"medium-slider"}>
      <S.TopWrapper id="promos">
        <S.TextWrapper>
          <Container>
            <S.ContentWrapper>
              {title && <S.Title>{title}</S.Title>}
              {menu && <S.MenuWrapper>{parse(menu)}</S.MenuWrapper>}
              <CustomButton
                className="lightBorder"
                onClick={() => downloadFile(button?.file?.mediaItemUrl)}
              >
                {button?.title}
              </CustomButton>
            </S.ContentWrapper>
          </Container>
        </S.TextWrapper>
      </S.TopWrapper>
    </RowGrid>
  )
}

export default PromoGrid
