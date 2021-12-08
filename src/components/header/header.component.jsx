import React from "react"
import * as S from "./header.styles.jsx"
import { Container, Grid } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import CustomButton from "../custom-button/custom-button.component"
import CommonSlider from "../common-slider/common-slider.component"
import LogoVertical from "../../assets/logoVertical.svg"

const Header = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <S.GeneralGrid container>
        <Grid item xs={12} md={6}>
          {/*<CommonSlider*/}
          {/*  images={[*/}
          {/*    { image: staticQuery.hero },*/}
          {/*    { image: staticQuery.hero },*/}
          {/*    { image: staticQuery.hero },*/}
          {/*  ]}*/}
          <S.ImageBg img={staticQuery.hero} />
        </Grid>
        <S.RightGrid item xs={12} md={6}>
          <S.Icon />
          <S.Pepper />
          {/*<S.BigPepper />*/}
          <Container maxWidth="xl">
            <S.LeftWrapper>
              <S.MiddleWrapper>
                <LogoVertical />
                <S.Subtitle>Gastronomía Asíatica</S.Subtitle>
                <CustomButton
                  style={{ marginBottom: "1em" }}
                  className="lightBorder moreWidth"
                >
                  Reservas
                </CustomButton>
                <CustomButton className="lightBorder moreWidth">
                  Pedir Online
                </CustomButton>
              </S.MiddleWrapper>
            </S.LeftWrapper>
            e
          </Container>
        </S.RightGrid>
      </S.GeneralGrid>
    </S.Wrapper>
  )
}
export default Header
