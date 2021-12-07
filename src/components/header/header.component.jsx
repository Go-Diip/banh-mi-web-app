import React from "react"
import * as S from "./header.styles.jsx"
import { Container, Grid } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import CustomButton from "../custom-button/custom-button.component"
import CommonSlider from "../common-slider/common-slider.component"

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
      <Grid container>
        <Grid item xs={12} md={6}>
          <CommonSlider
            haveIcon
            images={[
              { image: staticQuery.hero },
              { image: staticQuery.hero },
              { image: staticQuery.hero },
            ]}
          />
        </Grid>
        <S.RightGrid item xs={12} md={6}>
          <S.Icon />
          <Container maxWidth="xl">
            <S.LeftWrapper>
              <S.MiddleWrapper>
                <S.Title>Banh Mi</S.Title>
                <S.Subtitle>Gastronomía Asíatica</S.Subtitle>
                <CustomButton className="lightBorder">Reservas</CustomButton>
                <CustomButton className="lightBorder">
                  Pedir Online
                </CustomButton>
              </S.MiddleWrapper>
            </S.LeftWrapper>
            e
          </Container>
        </S.RightGrid>
      </Grid>
    </S.Wrapper>
  )
}
export default Header
