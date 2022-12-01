import React, { useState } from "react"
import * as S from "./menu.styles"
import { Container, useMediaQuery, useTheme } from "@mui/material"
import RowGrid from "../../components/row-grid/row-grid.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import { graphql, useStaticQuery } from "gatsby"
import { Fade } from "react-awesome-reveal"
import { isBrowser } from "../../utils"

const Menu = ({ image, images, title, description, buttons }) => {
  const [toggleState, setToggleState] = useState(0)
  const toggleTab = index => {
    setToggleState(index)
  }

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const staticQuery = useStaticQuery(graphql`
    query {
      yellow: file(relativePath: { eq: "yellow-bg.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  const downloadFile = fileUrl => {
    if (isBrowser()) {
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
    <RowGrid isSlider sliderImages={images}>
      <S.RightWrapper id="menu">
        {/*<S.Pepper />*/}
        <Container style={{ height: "100%" }}>
          <S.ContentWrapper>
            <Fade triggerOnce>
              <S.FadeWrapper>
                {/*<S.BlackPepper />*/}
                <S.Title>{title}</S.Title>
                <S.MenuDescription>{description}</S.MenuDescription>
                <S.ButtonsWrapper>
                  {buttons?.map(
                    ({ buttonTitle, fileOrLink, fileDoc, link }, index) => (
                      <React.Fragment key={`button-url-${index}`}>
                        {fileOrLink === "link" ? (
                          <S.Button className="darkBorder" href={link.url}>
                            {link.title}
                          </S.Button>
                        ) : (
                          <S.Button
                            className="darkBorder"
                            onClick={() => downloadFile(fileDoc.mediaItemUrl)}
                          >
                            {buttonTitle}
                          </S.Button>
                        )}
                      </React.Fragment>
                    )
                  )}
                </S.ButtonsWrapper>
              </S.FadeWrapper>
            </Fade>
          </S.ContentWrapper>
        </Container>
      </S.RightWrapper>
    </RowGrid>
  )
}

export default Menu
