import React, { useState } from "react"
import * as S from "./footer-form.styles"
import { contactFormApi } from "../../apis/apis"
import { navigate } from "gatsby-link"
import { TextField } from "@mui/material"
import { useForm, Controller } from "react-hook-form"

const FooterForm = ({}) => {
  const [products, setProducts] = useState("")
  // const { register, handleSubmit, errors, control } = useForm({
  //   mode: "onBlur",
  //   reValidateMode: "onBlur",
  // })
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const onSubmit = async data => {
    setIsLoading(true)
    const form = new FormData()
    form.append("yourEmail", data.yourEmail)

    contactFormApi
      .post("/971/feedback", form, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(response => {
        setIsLoading(false)
        if (response.data) {
          setSuccessMessage(response.data.message)
        }
      })
  }

  return (
    <S.Wrapper>
      <S.FormTitle>Suscribete a nuestro E-CLUB</S.FormTitle>
      <form>
        {isLoading && (
          <S.FormSpinner>
            <S.CustomSpinner />
          </S.FormSpinner>
        )}
        {!successMessage ? (
          <>
            <TextField
              required
              // inputRef={register}
              id="yourEmail"
              label="Email"
              variant="standard"
            />
          </>
        ) : (
          <>
            <h2>Gracias</h2>
          </>
        )}
      </form>
    </S.Wrapper>
  )
}

export default FooterForm
