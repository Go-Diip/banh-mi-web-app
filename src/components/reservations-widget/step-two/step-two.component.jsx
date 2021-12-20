import React from "react"
import * as S from "./step-two.styles.jsx"

import { Controller } from "react-hook-form"
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
} from "@mui/material"
import { Subtitle } from "../reservations-widget.styles"
import WidgetTextField from "../widget-text-field/widget-text-field.component"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import EmailIcon from "@mui/icons-material/Email"
import { STEPS } from "../reservations-widget.component"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useFormContext } from "react-hook-form"
import { validateEmail, validatePhone } from "../../../utils"

const inputNames = ["name", "phone", "email", "area"]

const StepTwo = ({ setCurrentStep }) => {
  const { register, trigger, control } = useFormContext()
  const handleNext = () => {
    trigger(inputNames).then(res => {
      if (res) {
        setCurrentStep(STEPS.FINALIZE)
      }
    })
  }

  return (
    <S.Wrapper>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Subtitle>Datos</Subtitle>
          <WidgetTextField
            name={inputNames[0]}
            label="Nombre"
            isRequired
            placeholder="tu nombre completo"
            autoComplete="given-name"
          />
          <WidgetTextField
            name={inputNames[1]}
            label="Teléfono"
            isRequired
            placeholder="tu teléfono"
            validate={validatePhone}
            autoComplete="tel"
            type="number"
            customError="Por favor ingresa un número válido de 10 digitos"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LocalPhoneIcon />
                </InputAdornment>
              ),
            }}
          />

          <WidgetTextField
            name={inputNames[2]}
            isRequired
            label="Correo electrónico"
            placeholder="tu correo electrónico"
            type="email"
            autoComplete="email"
            validate={validateEmail}
            customError="Correo electrónico inválido"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Subtitle>Ambiente</Subtitle>
          <FormControl
            component="fieldset"
            margin="normal"
            sx={{ marginBottom: "1.5em" }}
          >
            <Controller
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <RadioGroup
                  onBlur={onBlur} // notify when input is touched
                  onChange={onChange}
                  value={value}
                  aria-label="area"
                >
                  <S.CustomRadioButton
                    value="restaurante"
                    control={<Radio />}
                    label="Restaurante"
                  />
                  <S.CustomRadioButton
                    value="segundo piso"
                    control={<Radio />}
                    label="Segundo Piso"
                  />
                </RadioGroup>
              )}
              defaultValue="restaurante"
              name="area"
              control={control}
            />
          </FormControl>
          <Button
            fullWidth
            className="continueBtn"
            type="button"
            onClick={handleNext}
          >
            Continuar
            <ArrowForwardIcon />
          </Button>
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}
export default StepTwo
