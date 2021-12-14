import React from "react"

import * as S from "./footer.styles"
import { Container, Grid } from "@mui/material"
import Logo from "../../assets/logo.svg"
import parse from "html-react-parser"
import InstagramIcon from "@mui/icons-material/Instagram"
import GoogleIcon from "../../assets/google.svg"
import FacebookIcon from "../../assets/facebook.svg"
import CustomButton from "../custom-button/custom-button.component"
import FooterBanner from "../footer-banner/footer-banner.component"
import FooterForm from "../footer-form/footer-form.component"

const Footer = ({ className }) => {
  return (
    <>
      <FooterBanner id="contact" />
      <S.Wrapper className={className}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Logo />
              <S.LogoWrapper>
                <S.ExternalLink href="/" target="_blank">
                  <InstagramIcon />
                </S.ExternalLink>
                <S.ExternalLink href="/" target="_blank">
                  <GoogleIcon />
                </S.ExternalLink>
                <S.ExternalLink href="/" target="_blank">
                  <FacebookIcon />
                </S.ExternalLink>
              </S.LogoWrapper>
              <FooterForm />
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container>
                <Grid item xs={12} md={3}>
                  <S.Text>
                    {parse(
                      "<a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%3Fapi%3D1%26destination%3D-0.20677640851923%252C-78.48461151123%26fbclid%3DIwAR104bOPflJjwmppIrkznUjURnUJxyxqGa2mpXfbDufm2PHJeP3zBagGHJg&h=AT0tPKDGrIiEk-9Xcnb-BFmhsDyv3Q3WpcgALUr4D_7PxlN0bi25fig1wSzZ56qG_3EQzjMdsuPHrGjwfsZECkUplP-9OmtpoXqihbeVwUYBHWJCMotBkc3VyACrXjnPMLIxQ8ijZP0PC-5AZMoXsg' target='_blank'><strong>Dirección:</strong><br>" +
                        "Andalucia N24-234 y Cordero</a>"
                    )}
                  </S.Text>
                </Grid>
                <Grid item xs={12} md={3}>
                  <S.Text>
                    {parse(
                      "Atención:<br>" +
                        "Martes a Sábado<br>" +
                        "Horario:<br>" +
                        "12:30-15:30 y 19:00-22:30<br>" +
                        "Lunes y Domingos: Cerrado"
                    )}
                  </S.Text>
                </Grid>
                <Grid item xs={12} md={6}>
                  <S.PhoneContainer>
                    <CustomButton className="lightBorder">
                      ordena online
                    </CustomButton>
                    <S.PhoneWrapper>
                      <S.PhoneDescription>Teléfono</S.PhoneDescription>
                      <S.Phone href="tel:(212) 677-1913">
                        (212) 677-1913
                      </S.Phone>
                    </S.PhoneWrapper>
                  </S.PhoneContainer>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <S.Line />
          <S.PoweredWrapper>
            <S.PoweredBy />
          </S.PoweredWrapper>
        </Container>
      </S.Wrapper>
    </>
  )
}

export default Footer
