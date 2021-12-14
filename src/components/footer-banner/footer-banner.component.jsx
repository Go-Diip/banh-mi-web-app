import React from "react"
import * as S from "./footer-banner.styles"
import { Container } from "@mui/material"
import CustomButton from "../custom-button/custom-button.component"
import ReservationForm from "../../components/reservation-form/reservation-form.component"
import { Modal } from "@mui/material"

const FooterBanner = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <S.Wrapper>
      <S.MiddlePepper />
      <Container style={{ height: "100%" }}>
        <S.BannerWrapper>
          <S.TextWrapper>
            <S.BannerTitle>Eventos privados</S.BannerTitle>
            <S.BannerDescription>
              Reserva un espacio para eventos privados o para reservaciones de
              mas de 12 personas
            </S.BannerDescription>
          </S.TextWrapper>
          <CustomButton className="lightRed" onClick={handleOpen}>
            Contáctanos
          </CustomButton>
        </S.BannerWrapper>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ReservationForm close={handleClose} />
      </Modal>
    </S.Wrapper>
  )
}

export default FooterBanner
