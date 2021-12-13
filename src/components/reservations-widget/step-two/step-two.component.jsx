import React from "react"
import * as S from "./step-two.styles.jsx"
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
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

const StepTwo = ({ setCurrentStep }) => {
  const { register } = useFormContext()
  return (
    <S.Wrapper>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Subtitle>Datos</Subtitle>
          <WidgetTextField
            name="name"
            label="Nombre"
            placeholder="tu nombre completo"
          />
          <WidgetTextField
            name="telefono"
            label="Teléfono"
            placeholder="tu teléfono"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LocalPhoneIcon />
                </InputAdornment>
              ),
            }}
          />

          <WidgetTextField
            name="correo"
            label="Correo electrónico"
            placeholder="tu correo electrónico"
            type="email"
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
            <RadioGroup
              aria-label="gender"
              {...register("ambiente")}
              defaultValue="restaurante"
            >
              <S.CustomRadioButton
                value="restaurante"
                control={<Radio />}
                label="Restaurante"
              />
              <S.CustomRadioButton
                value="other"
                control={<Radio />}
                label="Segundo Piso"
              />
            </RadioGroup>
          </FormControl>
          <Button
            fullWidth
            className="continueBtn"
            type="button"
            onClick={() => setCurrentStep(STEPS.FINALIZE)}
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
