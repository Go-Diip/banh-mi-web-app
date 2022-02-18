import React, { useState } from "react"
import * as S from "./work-with-us-form.styles"
import {
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

const WorkWithUsForm = ({}) => {
  const { register, handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [age, setAge] = useState("")

  const handleChange = event => {
    setAge(event.target.value)
  }

  const onSubmit = async data => {
    setIsLoading(true)
    setErrorMessage("")

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
          if (response.data.status === "mail_sent") {
            setSuccessMessage(response.data.message)
          } else {
            setErrorMessage(response.data.message)
          }
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
    <>
      {isLoading && (
        <S.FormSpinner>
          <S.CustomSpinner />
        </S.FormSpinner>
      )}
      {!successMessage ? (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.CustomTextField
              variant="outlined"
              name="yourName"
              required
              autoComplete="name"
              placeholder="Nombre"
              fullWidth
              {...register("yourName")}
              errors={errors}
            />
            <S.CustomTextField
              variant="outlined"
              placeholder="Email"
              required
              autoComplete="email"
              type="email"
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
              variant="outlined"
              name="phone"
              required
              autoComplete="tel"
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
              <InputLabel style={{ color: "#a9a9a9" }}>Posiciones</InputLabel>
              <S.CustomSelect
                value={age}
                name="positions"
                label="Posiciones"
                required
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
              variant="outlined"
              placeholder="Experiencia"
              fullWidth
              required
              name="experience"
              {...register("experience")}
              errors={errors}
              multiline
              rows={4}
            />
            {errorMessage && (
              <Typography style={{ marginBottom: "1rem" }}>
                {errorMessage}
              </Typography>
            )}
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

export default WorkWithUsForm
