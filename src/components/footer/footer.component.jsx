import React from "react"

import * as S from "./footer.styles"
import { Container, Grid } from "@mui/material"
import Logo from "../../assets/logo.svg"
import parse from "html-react-parser"

const Footer = ({ className }) => {
  return (
    <S.Wrapper className={className}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Logo />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={12} md={6}>
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
      </Container>
      <div>Footer here</div>
    </S.Wrapper>
  )
}

export default Footer
