import React, { useState } from "react"
import * as S from "./footer-form.styles"
import { Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import addToMailchimp from "gatsby-plugin-mailchimp"

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
            <S.CustomTextField
              required
              color="tertiary"
              id="yourEmail"
              label="Email"
              variant="standard"
              {...register("email")}
              errors={errors}
            />
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
