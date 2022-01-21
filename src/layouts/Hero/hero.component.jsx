import React from "react"
import * as S from "./hero.styles"
import { InfoWrapper } from "./hero.styles"
import { Fade } from "react-awesome-reveal"
import { graphql, useStaticQuery } from "gatsby"

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
    <S.BgImage img={staticQuery.bg}>
      <S.TopWrapper>
        {/*<S.Pepper />*/}
        <S.CustomContainer maxWidth="xl">
          <S.ContentWrapper>
            <S.LogoVertical />
            {/*<S.Title>{title}</S.Title>*/}
            <S.ButtonWrapper>
              <S.Button className="lightBorderWhite" href="/reservations/">
                reservaciones
              </S.Button>
              <S.Button className="lightBorderWhite">ordenar online</S.Button>
            </S.ButtonWrapper>
          </S.ContentWrapper>
        </S.CustomContainer>
      </S.TopWrapper>
    </S.BgImage>
  )
}

export default Hero
