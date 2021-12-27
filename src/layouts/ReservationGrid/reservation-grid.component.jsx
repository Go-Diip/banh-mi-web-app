import React from "react"
import * as S from "./reservation-grid.styles"
import Pepper from "../../assets/pepper.svg"
import CustomButton from "../../components/custom-button/custom-button.component"
import RowGrid from "../../components/row-grid/row-grid.component"
import parse from "html-react-parser"
import { graphql, useStaticQuery } from "gatsby"
import { Fade } from "react-awesome-reveal"

const ReservationGrid = ({ image, images, title, numDesc, number, button }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      black: file(relativePath: { eq: "black.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)
  return (
    <RowGrid isSlider sliderImages={images}>
      <S.BgImage img={staticQuery.black}>
        <S.TopWrapper id="reservation">
          <S.PepperBg />
          <S.TextWrapper>
            <Fade direction="left">
              <S.ContentWrapper>
                <Pepper />
                {title && <S.Title>{title}</S.Title>}
                {numDesc && number && (
                  <S.Desc>
                    {parse(numDesc + "<br>")}
                    <S.Number href="tel:+59399 770 2994">099 770 2994</S.Number>
                  </S.Desc>
                )}
                <CustomButton className="lightBorder" href="/reservations/">
                  {button?.title}
                </CustomButton>
                <S.PoweredIcon />
              </S.ContentWrapper>
            </Fade>
          </S.TextWrapper>
        </S.TopWrapper>
      </S.BgImage>
    </RowGrid>
  )
}

export default ReservationGrid
