import React, { useEffect, useState } from "react"
import * as S from "./step-two.styles.jsx"

import { Controller, useFormContext } from "react-hook-form"
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
  Tooltip,
} from "@mui/material"
import { Disclaimer, Subtitle } from "../reservations-widget.styles"
import WidgetTextField from "../widget-text-field/widget-text-field.component"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import EmailIcon from "@mui/icons-material/Email"
import { STEPS } from "../reservations-widget.component"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { getBlockedAreas, validateEmail, validatePhone } from "../../../utils"
import Typography from "@mui/material/Typography"
import moment from "moment"
import {
  AREAS,
  EXCEPTIONAL_BAR_OPEN_DATES,
  EXCEPTIONAL_BAR_OPEN_TIMES,
} from "../../../constants"

const inputNames = ["name", "last_name", "phone", "email", "area"]

const StepTwo = ({ setCurrentStep }) => {
  const { trigger, control, getValues, watch, setValue } = useFormContext()
  const selectedTime = watch("time")
  const selectedDate = watch("date")
  const blockedAreas = getBlockedAreas(moment(selectedDate), selectedTime)
  const [isBarAvailable, setIsBarAvailable] = useState(true)
  const isRestaurantAvailable = !blockedAreas?.includes(AREAS.RESTAURANTE.value)
  const handleNext = () => {
    trigger(inputNames).then(res => {
      if (res) {
        setCurrentStep(STEPS.FINALIZE)
      }
    })
  }

  const area = watch("area")

  useEffect(() => {
    const selectedTimeDateFormat = moment(getValues("time"), "H:mm")
    const isExceptionalOpenBarDate =
      EXCEPTIONAL_BAR_OPEN_DATES.includes(selectedDate)
    const isExceptionalOpenBarTime = EXCEPTIONAL_BAR_OPEN_TIMES.find(
      time => time.value === selectedTime
    )
    const minBarTime = moment("18:59", "H:mm")
    setIsBarAvailable(
      (selectedTimeDateFormat.isAfter(minBarTime) &&
        !blockedAreas?.includes(AREAS.BAR.value)) ||
        (isExceptionalOpenBarTime && isExceptionalOpenBarDate)
    )
  }, [])

  useEffect(() => {
    if (!isBarAvailable && isRestaurantAvailable) {
      setValue("area", AREAS.RESTAURANTE.value)
    }

    if (!isRestaurantAvailable && isBarAvailable) {
      setValue("area", AREAS.BAR.value)
    }
  }, [isBarAvailable, isRestaurantAvailable])

  return (
    <S.Wrapper>
      <Grid container spacing={{ xs: 1, md: 4 }}>
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
            placeholder="Tus dos apellidos"
            autoComplete="family-name"
          />
          <WidgetTextField
            name={inputNames[2]}
            label="Teléfono"
            isRequired
            placeholder="Tu teléfono celular"
            validate={validatePhone}
            autoComplete="tel"
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
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
                    value={AREAS.RESTAURANTE.value}
                    control={<Radio />}
                    label="Restaurante"
                    disabled={!isRestaurantAvailable}
                  />
                  <Tooltip
                    title={
                      isBarAvailable
                        ? ""
                        : "Esta área no se encuentra disponible en el horario seleccionado"
                    }
                  >
                    <S.CustomRadioButton
                      value={AREAS.BAR.value}
                      control={<Radio />}
                      label="Segundo Piso"
                      disabled={
                        !isBarAvailable || blockedAreas?.includes("bar")
                      }
                    />
                  </Tooltip>
                </RadioGroup>
              )}
              defaultValue={AREAS.RESTAURANTE.value}
              name={inputNames[4]}
              control={control}
            />
            {area === AREAS.BAR.value && (
              <Typography sx={{ marginTop: "1rem" }}>
                <b>Requisito Obligatorio:</b> Para reservaciones en el área del
                Segundo Piso (Bar) todos los asistentes deben de cumplir con la
                mayoría de edad.
              </Typography>
            )}
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
          reservación será enviada a tu correo electrónico y por WhatsApp.
        </Typography>
      </Disclaimer>
    </S.Wrapper>
  )
}
export default StepTwo
