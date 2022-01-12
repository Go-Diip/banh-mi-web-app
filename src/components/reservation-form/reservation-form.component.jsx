import React from "react"
import * as S from "./reservation-form.styles"
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

const ReservationForm = ({ close }) => {
  const [age, setAge] = React.useState("")

  const handleChange = event => {
    setAge(event.target.value)
  }

  const staticQuery = useStaticQuery(graphql`
    query {
      menu: file(relativePath: { eq: "full-menu.jpg" }) {
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
        <S.Description>
          En Banh Mi ofrecemos cocina de producto local con influencia asiática.
          Nuestras preparaciones se basan principalmente en el wok y la
          parrilla. Contamos con una barra de coctelería clásica donde podrás
          encontrar la mayor variedad de licores de la ciudad y cualquier cóctel
          clásico.
        </S.Description>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Box component="form" noValidate autoComplete="off">
              <S.CustomTextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Nombre completo"
                fullWidth
              />
              <S.CustomTextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Correo electrónico"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
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
                </Grid>
                <Grid item xs={12} md={6}>
                  <S.CustomTextField
                    variant="outlined"
                    placeholder="Cantidad de personas"
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <S.CustomTextField
                    id="date"
                    type="date"
                    required
                    fullWidth
                    defaultValue="Día del evento"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <S.CustomTextField
                    id="time"
                    type="time"
                    defaultValue="Hora del evento"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  {" "}
                  <FormControl fullWidth>
                    <InputLabel style={{ color: "#a9a9a9" }}>
                      Type of Menu
                    </InputLabel>
                    <S.CustomSelect
                      value={age}
                      label="Tipo de Menú"
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
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel style={{ color: "#a9a9a9" }}>
                      Type of Event
                    </InputLabel>
                    <S.CustomSelect
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={age}
                      label="Tipo de Evento"
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
                </Grid>
              </Grid>

              <S.CustomTextField
                variant="outlined"
                placeholder="Special Request (optional)"
                fullWidth
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
                Cocina inspirada en productos locales con los sabores y la magia
                del Sureste Asiático.
              </S.Description>
            </S.RightWrapper>
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default ReservationForm
