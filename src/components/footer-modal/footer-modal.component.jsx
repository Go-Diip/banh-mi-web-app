import React, { useState } from "react"
import * as S from "./footer-modal.styles"
import {
  Container,
  Grid,
  InputAdornment,
  FormControl,
  MenuItem,
  InputLabel,
  Typography,
} from "@mui/material"
import Logo from "../../assets/logo-red.svg"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import CustomButton from "../custom-button/custom-button.component"
import { graphql, useStaticQuery } from "gatsby"
import CancelIcon from "@mui/icons-material/Cancel"
import { useForm } from "react-hook-form"
import { contactFormApi } from "../../apis/apis"

const FooterModal = ({ close }) => {
  const { register, handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [age, setAge] = useState("")

  const handleChange = event => {
    setAge(event.target.value)
  }

  const onSubmit = async data => {
    setIsLoading(true)

    const form = new FormData()
    form.append("yourName", data.yourName)
    form.append("yourEmail", data.yourEmail)
    form.append("phone", data.phone)
    form.append("positions", data.positions)
    form.append("experience", data.experience)

    contactFormApi
      .post(`/400/feedback`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(async response => {
        setIsLoading(false)
        if (response.data) {
          setSuccessMessage(response.data.message)
        }
      })
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
        {isLoading && (
          <S.FormSpinner>
            <S.CustomSpinner />
          </S.FormSpinner>
        )}
        {!successMessage ? (
          <>
            <Grid container>
              <Grid item xs={12} md={7}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <S.CustomTextField
                    id="outlined-basic"
                    variant="outlined"
                    name="yourName"
                    placeholder="Nombre"
                    fullWidth
                    {...register("yourName")}
                    errors={errors}
                  />
                  <S.CustomTextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Email"
                    name="yourEmail"
                    fullWidth
                    {...register("yourEmail")}
                    errors={errors}
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
                    name="phone"
                    placeholder="Teléfono"
                    fullWidth
                    {...register("phone")}
                    errors={errors}
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
                      name="positions"
                      label="Posiciones"
                      {...register("positions")}
                      errors={errors}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>--</em>
                      </MenuItem>
                      <MenuItem value="cocinero">Cocinero</MenuItem>
                      <MenuItem value="mesero">Mesero</MenuItem>
                      {/*<MenuItem value={30}>Thirty</MenuItem>*/}
                    </S.CustomSelect>
                  </FormControl>

                  <S.CustomTextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Experiencia"
                    fullWidth
                    name="experience"
                    {...register("experience")}
                    errors={errors}
                    multiline
                    rows={4}
                  />
                  <CustomButton fullWidth type="submit">
                    Submit
                  </CustomButton>
                </form>
              </Grid>
              <Grid item xs={12} md={5}>
                <S.RightWrapper>
                  <S.Image img={staticQuery.menu} />
                  <S.Description>
                    ¡Forma parte de nuestro equipo! En Banh Mi ofrocemos una
                    cocina inspirada en productos locales con los sabores y la
                    magia del Sureste Asiático.
                  </S.Description>
                </S.RightWrapper>
              </Grid>
            </Grid>
          </>
        ) : (
          <S.SuccessMessage>
            <Typography>{successMessage}</Typography>
          </S.SuccessMessage>
        )}
      </Container>
    </S.Wrapper>
  )
}

export default FooterModal
