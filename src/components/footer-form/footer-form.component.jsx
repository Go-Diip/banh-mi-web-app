import React, { useState } from "react"
import * as S from "./footer-form.styles"
import { Grid, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import addToMailchimp from "gatsby-plugin-mailchimp"
import CustomButton from "../custom-button/custom-button.component"
import { SubscribeBtn } from "./footer-form.styles"

const FooterForm = ({}) => {
  const { register, handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const onSubmit = async data => {
    setIsLoading(true)
    const { result, msg } = await addToMailchimp(data.email, {
      EMAIL: data.email,
    })

    if (result === "success") {
      setSuccessMessage("Gracias por subscribirte")
    }
    setIsLoading(false)
  }

  return (
    <S.Wrapper>
      <S.FormTitle>Suscribete a nuestro E-CLUB</S.FormTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isLoading && (
          <S.FormSpinner>
            <S.CustomSpinner />
          </S.FormSpinner>
        )}
        {!successMessage ? (
          <>
            <Grid container>
              <Grid item xs={6}>
                <S.CustomTextField
                  required
                  color="tertiary"
                  id="yourEmail"
                  label="Email"
                  variant="standard"
                  {...register("email")}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6}>
                <S.SubscribeBtn className="lightBorder" fullWidth type="submit">
                  Suscribirse
                </S.SubscribeBtn>
              </Grid>
            </Grid>
          </>
        ) : (
          <S.SuccessMessage>
            <Typography>{successMessage}</Typography>
          </S.SuccessMessage>
        )}
      </form>
    </S.Wrapper>
  )
}

export default FooterForm
