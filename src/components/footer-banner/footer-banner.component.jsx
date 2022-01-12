import React from "react"
import * as S from "./footer-banner.styles"
import { Container, useTheme } from "@mui/material"
import ReservationForm from "../../components/reservation-form/reservation-form.component"
import { Modal } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import useMediaQuery from "@mui/material/useMediaQuery"

const FooterBanner = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "footer-banner.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      mobileBg: file(relativePath: { eq: "bannerMobile.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const theme = useTheme()
  const isSM = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
      {!isSM ? (
        <S.BgWrapper img={staticQuery.bg} tag="div" id="eventos-privados">
          <S.Wrapper>
            {/*<S.MiddlePepper />*/}
            <Container style={{ height: "100%" }}>
              <S.BannerWrapper>
                <S.TextWrapper>
                  <S.BannerTitle>Eventos privados</S.BannerTitle>
                  <S.BannerDescription>
                    Reserva un espacio para eventos privados o para
                    reservaciones de mas de 10 personas
                  </S.BannerDescription>
                </S.TextWrapper>
                <S.Button className="lightRed" onClick={handleOpen}>
                  Contáctanos
                </S.Button>
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
        </S.BgWrapper>
      ) : (
        <S.MobileWrapper>
          <S.MobileImage img={staticQuery.mobileBg} />
          <Container style={{ height: "100%" }}>
            <S.BannerWrapper>
              <S.TextWrapper>
                <S.BannerTitle>Eventos privados</S.BannerTitle>
                <S.BannerDescription>
                  Reserva un espacio para eventos privados o para reservaciones
                  de mas de 10 personas
                </S.BannerDescription>
              </S.TextWrapper>
              <S.Button className="lightRed" onClick={handleOpen}>
                Contáctanos
              </S.Button>
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
        </S.MobileWrapper>
      )}
    </>
  )
}

export default FooterBanner
