import React from "react"
import * as S from "./reservation-grid.styles"
import Pepper from "../../assets/pepper.svg"
import CustomButton from "../../components/custom-button/custom-button.component"
import RowGrid from "../../components/row-grid/row-grid.component"
import theme from "../../gatsby-theme-material-ui-top-layout/theme"
import { Modal } from "@mui/material"
import ReservationForm from "../../components/reservation-form/reservation-form.component"

const ReservationGrid = ({ image, title, numDesc, number, button }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <RowGrid image={image} bgColor={theme.palette.primary.dark}>
      <S.TopWrapper id="reservation">
        <S.PepperBg />
        <S.TextWrapper>
          <S.ContentWrapper>
            <Pepper />
            {title && <S.Title>{title}</S.Title>}
            {numDesc && number && (
              <S.Desc>
                {numDesc}
                <S.Number href="">{number}</S.Number>
              </S.Desc>
            )}
            <CustomButton
              className="lightBorder"
              onClick={handleOpen}
              href={button?.url}
            >
              {button?.title}
            </CustomButton>
            <S.PoweredIcon />
          </S.ContentWrapper>
        </S.TextWrapper>
      </S.TopWrapper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ReservationForm />
      </Modal>
    </RowGrid>
  )
}

export default ReservationGrid
