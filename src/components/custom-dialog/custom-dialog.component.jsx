import React, { useState } from "react"
import PropTypes from "prop-types"
import * as S from "./custom-dialog.styles"
import CancelIcon from "@mui/icons-material/Cancel"
import { Container, Grid } from "@mui/material"
import Logo from "../../assets/logoVertical-dark.svg"

const CustomDialog = ({
  title,
  description,
  handleClose,
  open,
  children,
  image,
  rightDescription,
}) => {
  return (
    <S.Wrapper onClose={handleClose} open={open}>
      <Container>
        <S.TopWrapper>
          <Logo style={{ height: "80px", width: "auto" }} />
          <S.CloseIcon onClick={handleClose}>
            <CancelIcon />
          </S.CloseIcon>
        </S.TopWrapper>
        <S.TextWrapper>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.TextWrapper>
        <Grid container>
          <Grid item xs={12} md={7}>
            {children}
          </Grid>
          <Grid item xs={12} md={5}>
            <S.RightWrapper>
              <S.Image img={image} />
              <S.Description>{rightDescription}</S.Description>
            </S.RightWrapper>
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

CustomDialog.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default CustomDialog
