import React, { useState } from "react"

import * as S from "./footer.styles"
import { Container, Grid, useTheme } from "@mui/material"
import parse from "html-react-parser"
import InstagramIcon from "../../assets/instagram.svg"
import GoogleIcon from "../../assets/google.svg"
import FacebookIcon from "../../assets/facebook.svg"
import TripIcon from "../../assets/trip.svg"
import CustomButton from "../custom-button/custom-button.component"
import FooterBanner from "../footer-banner/footer-banner.component"
import FooterForm from "../footer-form/footer-form.component"
import PhoneIcon from "../../assets/phone.svg"
import { graphql, useStaticQuery } from "gatsby"
import useMediaQuery from "@mui/material/useMediaQuery"
import CustomDialog from "../custom-dialog/custom-dialog.component"
import WorkWithUsFormComponent from "../work-with-us-form/work-with-us-form.component"
import { sendGtagOrderOnlineEvent } from "../../gtag-utils"

const Footer = ({ className }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  const theme = useTheme()
  const isMD = useMediaQuery(theme.breakpoints.down("md"))
  const isSM = useMediaQuery(theme.breakpoints.down("sm"))

  const staticQuery = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "new-red-bg.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }

      workImg: file(relativePath: { eq: "trabaja-con.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <>
      <FooterBanner id="contact" />
      <S.Wrapper className={className} id="ordena-online">
        <S.BgImage img={staticQuery.bg}>
          <Container maxWidth="xl">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <S.FormWrapper>
                  <S.FooterLogo />
                  {!isMD && <FooterForm />}
                  {isSM && (
                    <S.PhoneContainer>
                      <CustomButton
                        className="lightBorder"
                        onClick={sendGtagOrderOnlineEvent}
                        href="https://www.rappi.com.ec/restaurantes/17168-banh-mi"
                        target="_blank"
                      >
                        ordenar online
                      </CustomButton>
                      <CustomButton
                        className="lightBorder"
                        href="/reservaciones/"
                        fullWidth
                      >
                        reservaciones
                      </CustomButton>
                    </S.PhoneContainer>
                  )}
                </S.FormWrapper>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Grid container>
                  <Grid item xs={12} sm={4}>
                    <S.Text>
                      {parse(
                        "<a href='https://goo.gl/maps/LKy1qzYiUFz4cQkS7' target='_blank'><strong>Dirección:</strong><br>" +
                          "Andalucía N24-234 y Luis Cordero<br>Sector La Floresta.<br>Quito, Ecuador</a>"
                      )}
                    </S.Text>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <S.InfoWrapper>
                      <S.Text>
                        {parse(
                          "<strong>Horario:</strong><br>" +
                            "Martes a Sábado<br>" +
                            "Restaurante<br>" +
                            "12:30pm - 3:30pm<br>" +
                            "7:00pm - 10:30pm<br>" +
                            "Segundo Piso<br>" +
                            "7:00pm - 12:00am<br>" +
                            "---<br>" +
                            "Domingos y Lunes: cerrados"
                        )}
                      </S.Text>
                      <S.PhoneWrapper>
                        <PhoneIcon />
                        <S.Phone href="tel:+59399 770 2994">
                          099 770 2994
                        </S.Phone>
                      </S.PhoneWrapper>
                    </S.InfoWrapper>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={4}>
                    {!isSM && (
                      <S.PhoneContainer>
                        <CustomButton
                          className="lightBorder"
                          onClick={sendGtagOrderOnlineEvent}
                          href="https://www.rappi.com.ec/restaurantes/17168-banh-mi"
                          fullWidth
                          target="_blank"
                        >
                          ordenar online
                        </CustomButton>
                        <CustomButton
                          className="lightBorder"
                          href="/reservaciones/"
                          fullWidth
                        >
                          reservaciones
                        </CustomButton>
                      </S.PhoneContainer>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <S.Line />
            <S.PoweredWrapper>
              <S.LogoWrapper>
                <S.ExternalLink
                  href="https://www.instagram.com/banhmi.ec/"
                  target="_blank"
                >
                  <InstagramIcon />
                </S.ExternalLink>
                <S.ExternalLink
                  href="https://www.google.com/search?q=banh+mi+quito&sxsrf=AOaemvKpbOARXQGWEsjMNqrBXcZIyNTxHg%3A1640134389684&source=hp&ei=9XbCYfvpJ_GYwbkPkvm88AY&iflsig=ALs-wAMAAAAAYcKFBafPP4RCtaAl01EIxOUyxwG_PrZx&gs_ssp=eJzj4tVP1zc0TDaozCjKSUsyYLRSNaiwNEwxtUw0SDVLNTKzSDW2tDKoMDdMNTM0NDNMNElKNky0TPLiTUrMy1DIzVQoLM0syQcAqh8UPA&oq=banh+mi+quito&gs_lcp=Cgdnd3Mtd2l6EAEYAzIECCMQJzIECCMQJzIECCMQJzILCC4QgAQQxwEQrwEyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yAggmOgoILhDHARCvARAnOgUILhCABDoLCC4QgAQQxwEQ0QM6BQgAEIAEOgsILhCABBDHARCjAjoKCAAQgAQQhwIQFDoKCC4QxwEQ0QMQJzoICAAQgAQQyQM6BQgAEMsBOggIABAWEAoQHlAAWJMQYPYbaABwAHgAgAGpAYgBrg-SAQQwLjEzmAEAoAEB&sclient=gws-wiz#lrd=0x91d59a0e6e268e39:0x71e61161a4bc1a9b,1"
                  target="_blank"
                >
                  <GoogleIcon />
                </S.ExternalLink>
                <S.ExternalLink
                  href="https://www.facebook.com/banhmi.ec"
                  target="_blank"
                >
                  <FacebookIcon />
                </S.ExternalLink>
                <S.ExternalLink
                  href="https://www.tripadvisor.com/Restaurant_Review-g294308-d8512340-Reviews-Banh_Mi-Quito_Pichincha_Province.html"
                  target="_blank"
                >
                  <TripIcon />
                </S.ExternalLink>
              </S.LogoWrapper>
              <S.RightWrapper>
                <S.WorkText onClick={handleOpen}>
                  Trabaja con Nosotros
                </S.WorkText>
                <S.VerticalLine />
                <S.ExternalLink
                  href="https://www.godiip.com/?utm_source=banhmi+powered+by+link&utm_medium=link+on+bottom+of+website&utm_campaign=banhmi+powered+by+link"
                  target="_blank"
                >
                  <S.PoweredBy />
                </S.ExternalLink>
              </S.RightWrapper>
            </S.PoweredWrapper>
          </Container>
        </S.BgImage>
      </S.Wrapper>
      <CustomDialog
        open={open}
        handleClose={handleClose}
        title="Trabaja con Nosotros"
        image={staticQuery.workImg}
        description="¿Quieres formar parte del equipo de Banh Mi? Te invitamos a aplicar a nuestras posiciones disponibles en el siguiente formulario."
        rightDescription="¡Forma parte de nuestro equipo! En Banh Mi ofrocemos una cocina
                inspirada en productos locales con los sabores del Sureste
                Asiático."
      >
        <WorkWithUsFormComponent handleClose={handleClose} />
      </CustomDialog>
    </>
  )
}

export default Footer
