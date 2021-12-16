import React from "react"

import * as S from "./footer.styles"
import { Container, Grid } from "@mui/material"
import parse from "html-react-parser"
import InstagramIcon from "../../assets/instagram.svg"
import GoogleIcon from "../../assets/google.svg"
import FacebookIcon from "../../assets/facebook.svg"
import TripIcon from "../../assets/trip.svg"
import CustomButton from "../custom-button/custom-button.component"
import FooterBanner from "../footer-banner/footer-banner.component"
import FooterForm from "../footer-form/footer-form.component"
import { Modal } from "@mui/material"
import ReservationForm from "../reservation-form/reservation-form.component"
import FooterModal from "../footer-modal/footer-modal.component"

const Footer = ({ className }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <FooterBanner id="contact" />
      <S.Wrapper className={className}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <S.FormWrapper>
                <S.FooterLogo />
                <FooterForm />
              </S.FormWrapper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container>
                <Grid item xs={12} md={3}>
                  <S.Text>
                    {parse(
                      "<a href='https://goo.gl/maps/LKy1qzYiUFz4cQkS7' target='_blank'><strong>Dirección:</strong><br>" +
                        "Andalucía N24-234 y Cordero<br>Quito,Ecuador</a>"
                    )}
                  </S.Text>
                </Grid>
                <Grid item xs={12} md={3}>
                  <S.Text>
                    {parse(
                      "<strong>Horario:</strong><br>" +
                        "Martes a Sábado<br>" +
                        "12:30-15:30 y 19:00-22:30<br>" +
                        "---<br>" +
                        "Lunes y Domingos: cerrados"
                    )}
                  </S.Text>
                </Grid>
                <Grid item xs={12} md={6}>
                  <S.PhoneContainer>
                    <CustomButton className="lightBorder">
                      ordena online
                    </CustomButton>
                    <S.PhoneWrapper>
                      <S.Phone href="tel:+59399 770 2994">099 770 2994</S.Phone>
                    </S.PhoneWrapper>
                  </S.PhoneContainer>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <S.Line />
          <S.PoweredWrapper>
            <S.LogoWrapper>
              <S.ExternalLink
                href="https://www.instagram.com/banhmisanducheria/"
                target="_blank"
              >
                <InstagramIcon />
              </S.ExternalLink>
              <S.ExternalLink
                href="https://www.google.com/maps/u…BHXLpACIQoip6BAgyEAM"
                target="_blank"
              >
                <GoogleIcon />
              </S.ExternalLink>
              <S.ExternalLink
                href="https://www.facebook.com/banhmisanducheria"
                target="_blank"
              >
                <FacebookIcon />
              </S.ExternalLink>
              <S.ExternalLink
                href="https://www.facebook.com/banhmisanducheria"
                target="_blank"
              >
                <TripIcon />
              </S.ExternalLink>
            </S.LogoWrapper>
            <S.RightWrapper>
              <S.WorkText onClick={handleOpen}>Trabaja con Nosotros</S.WorkText>
              <S.VerticalLine />
              <S.PoweredBy />
            </S.RightWrapper>
          </S.PoweredWrapper>
        </Container>
      </S.Wrapper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <FooterModal close={handleClose} />
      </Modal>
    </>
  )
}

export default Footer
