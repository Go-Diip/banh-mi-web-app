import React, { useState } from "react"
import * as S from "./reservation-form.styles"
import {
  Grid,
  InputAdornment,
  FormControl,
  MenuItem,
  InputLabel,
  Typography,
} from "@mui/material"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import CustomButton from "../custom-button/custom-button.component"
import { graphql, useStaticQuery } from "gatsby"
import { useForm } from "react-hook-form"
import { contactFormApi } from "../../apis/apis"

const ReservationForm = ({}) => {
  const [age, setAge] = React.useState("")
  const [menu, setMenu] = React.useState("")
  const { register, handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const onSubmit = async data => {
    setIsLoading(true)

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
          setSuccessMessage(response.data.message)
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
            <S.CustomTextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Nombre completo"
              {...register("yourName")}
              errors={errors}
              fullWidth
            />
            <S.CustomTextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Correo electrónico"
              {...register("yourEmail")}
              errors={errors}
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
                  {...register("phone")}
                  errors={errors}
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
                  {...register("numberOfPersons")}
                  errors={errors}
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
                  {...register("date")}
                  errors={errors}
                  lang="es"
                  fullWidth
                  defaultValue="Día del evento"
                  inputProps={{
                    lang: "es",
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <S.CustomTextField
                  id="time"
                  type="time"
                  // defaultValue="Hora del evento"
                  {...register("hourForm")}
                  errors={errors}
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

            <S.CustomTextField
              variant="outlined"
              placeholder="Requerimientos especiales (opcional)"
              {...register("specialRequest")}
              multiline
              rows={2}
              errors={errors}
              fullWidth
            />
            <CustomButton fullWidth type="submit">
              Enviar
            </CustomButton>
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
