import React, { useState } from "react"
import * as S from "./menu.styles"
import { Container, Grid } from "@mui/material"
import CommonSlider from "../../components/common-slider/common-slider.component"
import parse from "html-react-parser"

const Menu = ({ images, menuOptions }) => {
  const [toggleState, setToggleState] = useState(0)
  const toggleTab = index => {
    setToggleState(index)
  }

  return (
    <S.Wrapper>
      <Grid container>
        <Grid item xs={12} md={6}>
          <CommonSlider images={images} />
        </Grid>
        <Grid item xs={12} md={6}>
          <S.RightWrapper>
            <S.Pepper />
            <Container>
              <S.NavWrapper>
                {menuOptions.map(({ option }, index) => (
                  <S.NavButton
                    className={
                      toggleState === index
                        ? "activeMenuButton"
                        : "transparentMenuButton"
                    }
                    key={`image-slide-${index}`}
                    onClick={() => toggleTab(index)}
                  >
                    {parse(option.title)}
                  </S.NavButton>
                ))}
              </S.NavWrapper>
            </Container>
          </S.RightWrapper>
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}

export default Menu
