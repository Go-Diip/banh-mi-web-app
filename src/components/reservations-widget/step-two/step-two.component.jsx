import React from "react"
import * as S from "./step-two.styles.jsx"

import { Controller, useFormContext } from "react-hook-form"
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
} from "@mui/material"
import { Disclaimer, Subtitle } from "../reservations-widget.styles"
import WidgetTextField from "../widget-text-field/widget-text-field.component"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import EmailIcon from "@mui/icons-material/Email"
import { STEPS } from "../reservations-widget.component"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { validateEmail, validatePhone } from "../../../utils"
import Typography from "@mui/material/Typography"

const inputNames = ["name", "last_name", "phone", "email", "area"]

const StepTwo = ({ setCurrentStep }) => {
  const { trigger, control } = useFormContext()
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
            placeholder="Tu primer nombre"
            autoComplete="given-name"
          />
          <WidgetTextField
            name={inputNames[1]}
            label="Apellidos"
            isRequired
            placeholder="Tus dos apellido"
            autoComplete="family-name"
          />
          <WidgetTextField
            name={inputNames[2]}
            label="Teléfono"
            isRequired
            placeholder="Tu teléfono celular"
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
            name={inputNames[3]}
            isRequired
            label="Correo electrónico"
            placeholder="Tu correo electrónico"
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
                    value="bar"
                    control={<Radio />}
                    label="Bar"
                  />
                </RadioGroup>
              )}
              defaultValue="restaurante"
              name={inputNames[4]}
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
      <Disclaimer>
        <Typography>
          Asegúrate de colocar tus datos correctamente. La confirmación de tu
          reservación será enviada a tu correo electrónico y por mensaje de
          texto.
        </Typography>
      </Disclaimer>
    </S.Wrapper>
  )
}
export default StepTwo
