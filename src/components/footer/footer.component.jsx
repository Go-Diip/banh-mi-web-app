import React from "react"

import * as S from "./footer.styles"
import { Container, Grid } from "@mui/material"
import Logo from "../../assets/logo.svg"
import parse from "html-react-parser"
import InstagramIcon from "@mui/icons-material/Instagram"
import GoogleIcon from "../../assets/google.svg"
import FacebookIcon from "../../assets/facebook.svg"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"

const Footer = ({ className }) => {
  return (
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
                    "Hours:<br>" +
                      "Mon: Cerrados<br>" +
                      "Tue: 11:00am to 11:00pm<br>" +
                      "Wed: 11:00am to 11:00pm<br>" +
                      "Thu: 11:00am to 11:00pm<br>" +
                      "Fri: 11:00am to 11:00pm<br>" +
                      "Sat: 11:00am to 11:00pm<br>" +
                      "Sun: Cerrados"
                  )}
                </S.Text>
              </Grid>
              <Grid item xs={12} md={6}>
                <S.Text>
                  {parse("Phone <br>")}
                  <a href="tel: 2126771913">(212)677-1913</a>
                </S.Text>
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
  )
}

export default Footer
