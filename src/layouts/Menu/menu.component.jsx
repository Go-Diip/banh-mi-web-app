import React, { useState } from "react"
import * as S from "./menu.styles"
import { Container, Grid, Box, Typography, Modal } from "@mui/material"
import CommonSlider from "../../components/common-slider/common-slider.component"
import parse from "html-react-parser"
import theme from "../../gatsby-theme-material-ui-top-layout/theme"
import RowGrid from "../../components/row-grid/row-grid.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import MenuModal from "../../components/menu-modal/menu-modal.component"

const Menu = ({ image }) => {
  const [toggleState, setToggleState] = useState(0)
  const toggleTab = index => {
    setToggleState(index)
  }

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <RowGrid image={image} bgColor={theme.palette.primary.light}>
      <S.RightWrapper id="menu">
        <S.Pepper />
        <Container style={{ height: "100%" }}>
          <S.ContentWrapper>
            <S.BlackPepper />
            <S.Title>MENU</S.Title>
            <CustomButton className="darkBorder" onClick={handleOpen}>
              Ver menu
            </CustomButton>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <MenuModal />
            </Modal>
          </S.ContentWrapper>
        </Container>
      </S.RightWrapper>
    </RowGrid>
  )
}

export default Menu
