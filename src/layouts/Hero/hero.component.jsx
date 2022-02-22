import React from "react"
import * as S from "./hero.styles"
import { graphql, useStaticQuery } from "gatsby"
import PepperIcon from "../../assets/pepper-red.svg"

const Hero = ({ title }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "red-bg-new.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <S.Circle>
        <S.Pepper>
          <div />
          <PepperIcon />
        </S.Pepper>
      </S.Circle>
      <S.BgImage img={staticQuery.bg} tag="div">
        <S.TopWrapper>
          {/*<S.Pepper />*/}
          <S.CustomContainer maxWidth="xl">
            <S.ContentWrapper>
              <S.LogoVertical />
              {/*<S.Title>{title}</S.Title>*/}
              <S.ButtonWrapper>
                <S.Button className="lightBorderWhite" href="/reservaciones/">
                  reservaciones
                </S.Button>
                <S.Button className="lightBorderWhite">ordenar online</S.Button>
              </S.ButtonWrapper>
            </S.ContentWrapper>
          </S.CustomContainer>
        </S.TopWrapper>
      </S.BgImage>
    </S.Wrapper>
  )
}

export default Hero
