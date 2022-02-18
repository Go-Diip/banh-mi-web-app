import React, { useState } from "react"
import * as S from "./reservation-form.styles"
import {
  Grid,
  InputAdornment,
  FormControl,
  MenuItem,
  InputLabel,
  Typography,
  TextField,
} from "@mui/material"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import CustomButton from "../custom-button/custom-button.component"
import { graphql, useStaticQuery } from "gatsby"
import { useForm } from "react-hook-form"
import { contactFormApi } from "../../apis/apis"
import CustomInput from "../custom-input/custom-input.component"

const ReservationForm = ({}) => {
  const [age, setAge] = React.useState("")
  const [menu, setMenu] = React.useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  })

  const onSubmit = async data => {
    setIsLoading(true)
    setErrorMessage("")
    const form = new FormData()
    form.append("yourName", data.yourName)
    form.append("yourEmail", data.yourEmail)
    form.append("phone", data.phone)
    form.append("numberOfPersons", data.numberOfPersons)
    form.append("date", data.date)
    form.append("hourForm", data.hourForm)
    form.append("typeOfMenu", data.typeOfMenu)
    form.append("typeOfEvent", data.typeOfEvent)
    form.append("specialRequest", data.specialRequest)

    contactFormApi
      .post(`/401/feedback`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(async response => {
        setIsLoading(false)
        if (response.data) {
          if (response.data.status === "mail_sent") {
            setSuccessMessage(response.data.message)
          } else {
            setErrorMessage(response.data.message)
          }
        }
      })
  }

  const handleChange = event => {
    setAge(event.target.value)
  }
  const handleChangeMenu = event => {
    setMenu(event.target.value)
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
    <>
      {isLoading && (
        <S.FormSpinner>
          <S.CustomSpinner />
        </S.FormSpinner>
      )}
      {!successMessage ? (
        <>
          <form onSubmit={handleSubmit(onSubmit)} lang="es">
            <Grid container spacing={2}>
              <CustomInput
                register={register}
                errors={errors}
                name="yourName"
                required
                autoComplete="name"
                placeholder="Nombre Completo"
              />

              <CustomInput
                name="yourEmail"
                required
                autoComplete="email"
                placeholder="Correo electrónico"
                register={register}
                errors={errors}
              >
                <MailOutlineIcon />
              </CustomInput>
              <CustomInput
                placeholder="Teléfono"
                name="phone"
                required
                autoComplete="tel"
                errors={errors}
                register={register}
                halfWidth
              >
                <PhoneOutlinedIcon />
              </CustomInput>
              <CustomInput
                name="numberOfPersons"
                placeholder="Cantidad de personas"
                {...register("numberOfPersons")}
                errors={errors}
                halfWidth
                register={register}
              />
              <CustomInput
                required
                name="date"
                type="date"
                register={register}
                errors={errors}
                halfWidth
              />
              <CustomInput
                required
                type="time"
                name="hourForm"
                register={register}
                errors={errors}
                halfWidth
              />
              <Grid item sx={{ width: "100%" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel style={{ color: "#a9a9a9" }}>
                        Tipo de Menú
                      </InputLabel>
                      <S.CustomSelect
                        value={menu}
                        label="Tipo de Menú"
                        {...register("typeOfMenu", {
                          required: true,
                        })}
                        errors={errors}
                        onChange={handleChangeMenu}
                      >
                        <MenuItem value="">
                          <em>--</em>
                        </MenuItem>
                        <MenuItem value="desayuno">Desayuno</MenuItem>
                        <MenuItem value="almuerzo">Almuerzo</MenuItem>
                        <MenuItem value="cena">Cena</MenuItem>
                        <MenuItem value="cocktail">Cocktail</MenuItem>
                        <MenuItem value="buffet">Buffet</MenuItem>
                        <MenuItem value="otro">Otro</MenuItem>
                      </S.CustomSelect>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel style={{ color: "#a9a9a9" }}>
                        Tipo de Evento
                      </InputLabel>
                      <S.CustomSelect
                        value={age}
                        {...register("typeOfEvent")}
                        errors={errors}
                        label="Tipo de Evento"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>--</em>
                        </MenuItem>
                        <MenuItem value="cumpleaños">Cumpleaños</MenuItem>
                        <MenuItem value="reunión de trabajo">
                          Reunión de Trabajo
                        </MenuItem>
                        <MenuItem value="ocasión especial">
                          Ocasión Especial
                        </MenuItem>
                        <MenuItem value="aniversario">Aniversario</MenuItem>
                      </S.CustomSelect>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              <CustomInput
                name="specialRequest"
                register={register}
                placeholder="Requerimientos especiales (opcional)"
                {...register("specialRequest")}
                rows={2}
                errors={errors}
              />
              {errorMessage && (
                <Typography style={{ marginTop: "2em" }}>
                  <b>{errorMessage}</b>
                </Typography>
              )}
              <Grid item xs={12}>
                <CustomButton fullWidth type="submit">
                  Enviar
                </CustomButton>
              </Grid>
            </Grid>
          </form>
        </>
      ) : (
        <S.SuccessMessage>
          <Typography>{successMessage}</Typography>
        </S.SuccessMessage>
      )}
    </>
  )
}

export default ReservationForm
