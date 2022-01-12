import React from "react"
import * as S from "./footer-modal.styles"
import {
  Container,
  Grid,
  Box,
  InputAdornment,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material"
import Logo from "../../assets/logo-red.svg"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import CustomButton from "../custom-button/custom-button.component"
import { graphql, useStaticQuery } from "gatsby"
import CancelIcon from "@mui/icons-material/Cancel"

const FooterModal = ({ close }) => {
  const [age, setAge] = React.useState("")

  const handleChange = event => {
    setAge(event.target.value)
  }

  const staticQuery = useStaticQuery(graphql`
    query {
      menu: file(relativePath: { eq: "trabaja-con.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <Container>
        <S.TopWrapper>
          <Logo />
          <CancelIcon onClick={close} />
        </S.TopWrapper>
        <S.Title>Trabaja con Nosotros</S.Title>
        <S.Description>
          ¿Quieres formar parte del equipo de Banh Mi? Te invitamos a aplicar a
          nuestras posiciones disponibles en el siguiente formulario.
        </S.Description>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Box component="form" noValidate autoComplete="off">
              <S.CustomTextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Nombre"
                fullWidth
              />
              <S.CustomTextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Email"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <S.CustomTextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Teléfono"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <PhoneOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl fullWidth>
                <InputLabel
                  style={{ color: "#a9a9a9" }}
                  id="demo-simple-select-helper-label"
                >
                  Posiciones
                </InputLabel>
                <S.CustomSelect
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Posiciones"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </S.CustomSelect>
              </FormControl>

              <S.CustomTextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Experiencia"
                fullWidth
                multiline
                rows={4}
              />
              <CustomButton fullWidth type="submit">
                Submit
              </CustomButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <S.RightWrapper>
              <S.Image img={staticQuery.menu} />
              <S.Description>
                ¡Forma parte de nuestro equipo! En Banh Mi ofrocemos una cocina
                inspirada en productos locales con los sabores y la magia del
                Sureste Asiático.
              </S.Description>
            </S.RightWrapper>
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default FooterModal
