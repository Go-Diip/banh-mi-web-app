import React from "react"
import * as S from "./reservation-grid.styles"
import Pepper from "../../assets/pepper.svg"
import CustomButton from "../../components/custom-button/custom-button.component"
import RowGrid from "../../components/row-grid/row-grid.component"
import parse from "html-react-parser"
import { graphql, useStaticQuery } from "gatsby"
import { Fade } from "react-awesome-reveal"
import PhoneIcon from "../../assets/phone.svg"

const ReservationGrid = ({ image, images, title, numDesc, number, button }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      black: file(relativePath: { eq: "black-section.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)
  return (
    <RowGrid isSlider sliderImages={images} reverse>
      <S.TopWrapper id="reservation">
        {/*<S.PepperBg />*/}
        <S.TextWrapper>
          <Fade direction="left">
            <S.ContentWrapper>
              {/*<Pepper />*/}
              {title && <S.Title>{title}</S.Title>}
              <CustomButton className="lightBorder" href="/reservations/">
                {button?.title}
              </CustomButton>
              <S.PoweredIcon />
              {numDesc && number && <S.Desc>{parse(numDesc)}</S.Desc>}
              <S.PhoneWrapper>
                <PhoneIcon />
                <S.Phone href="tel:+593981244567">0981244567</S.Phone>
              </S.PhoneWrapper>
            </S.ContentWrapper>
          </Fade>
        </S.TextWrapper>
      </S.TopWrapper>
    </RowGrid>
  )
}

export default ReservationGrid
