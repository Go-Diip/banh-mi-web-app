import React, { useState } from "react"
import * as S from "./menu.styles"
import { Container } from "@mui/material"
import theme from "../../gatsby-theme-material-ui-top-layout/theme"
import RowGrid from "../../components/row-grid/row-grid.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import { graphql, useStaticQuery } from "gatsby"
import { Fade } from "react-awesome-reveal"

const Menu = ({ image }) => {
  const [toggleState, setToggleState] = useState(0)
  const toggleTab = index => {
    setToggleState(index)
  }

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const staticQuery = useStaticQuery(graphql`
    query {
      yellow: file(relativePath: { eq: "yellow.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <RowGrid image={image} bgColor={theme.palette.primary.light}>
      <S.BgImage img={staticQuery.yellow}>
        <S.RightWrapper id="menu">
          <S.Pepper />
          <Container style={{ height: "100%" }}>
            <S.ContentWrapper>
              <Fade direction="right" triggerOnce>
                <S.FadeWrapper>
                  <S.BlackPepper />
                  <S.Title>MENÚ</S.Title>
                  <S.MenuDescription>
                    Para grupos de mas 10 personas, por favor comunicate al
                  </S.MenuDescription>
                  <CustomButton className="darkBorder" href="/menu/">
                    Ver menú
                  </CustomButton>
                </S.FadeWrapper>
              </Fade>
            </S.ContentWrapper>
          </Container>
        </S.RightWrapper>
      </S.BgImage>
    </RowGrid>
  )
}

export default Menu
