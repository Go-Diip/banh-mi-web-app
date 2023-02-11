import React from "react"
import * as S from "./step-three.styles.jsx"
import { Button, Grid, Typography } from "@mui/material"
import WidgetTextField from "../widget-text-field/widget-text-field.component"
import { NotesField } from "./step-three.styles.jsx"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useFormContext } from "react-hook-form"
import WidgetSelect from "../widget-select/widget-select.component"

export const reasonOptions = [
  {
    value: "ninguna",
    label: "Ninguna",
  },
  {
    value: "cumpleaños",
    label: "Cumpleaños",
  },
  {
    value: "reunión de trabajo",
    label: "Reunión de trabajo",
  },
  {
    value: "ocasión especial",
    label: "Ocasión especial",
  },
  {
    value: "aniversario",
    label: "Aniversario",
  },
]

const StepThree = () => {
  const { register, getValues } = useFormContext()
  const values = getValues(["name", "seats", "date", "time", "area"])
  return (
    <Grid container spacing={{ xs: 1, md: 4 }}>
      <Grid item xs={12} md={6}>
        <S.Title>Tu Reserva</S.Title>
        <S.ReviewBox>
          <label>Reservado por</label>
          <Typography>{values[0]}</Typography>
        </S.ReviewBox>
        <S.ReviewBox>
          <label>Puestos reservados</label>
          <Typography>{values[1]}</Typography>
        </S.ReviewBox>
        <S.ReviewBox>
          <label>Reservado para el</label>
          <Typography>{`${values[2]} a las ${values[3]}`}</Typography>
        </S.ReviewBox>
        <S.ReviewBox>
          <label>Lugar</label>
          <Typography style={{ textTransform: "capitalize" }}>
            {values[4]}
          </Typography>
        </S.ReviewBox>
        <WidgetSelect
          options={reasonOptions}
          name="occasion"
          label="Ocasión (opcional)"
          defaultValue={reasonOptions[0].value}
          isRequired
        />
        <NotesField>
          <Typography sx={{ fontWeight: "300" }}>
            Requerimiento especial
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "rgba(33, 33, 33, 0.83)" }}
          >
            Alergias, tipo de mesa, otros
          </Typography>
          <WidgetTextField
            // label="Requerimiento especial"
            name="notes"
            {...register("notes")}
            inputProps={{ maxLength: 120 }}
            placeholder="Escribe aquí tu nota..."
            multiline
            sx={{ marginBottom: "0" }}
            rows={5}
          />
        </NotesField>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <S.ImportantInfo>
          <p>
            <b>POLÍTICAS DE RESERVACIÓN</b>
          </p>
          <ul style={{ paddingLeft: "1rem" }}>
            <li>
              Una vez enviada tu solicitud de reservación, deberas esperar por
              la confirmación según nuestra disponibilidad via WhatsApp y correo
              electrónico.
            </li>
            <li>
              En caso de retraso, cancelaciones o cambio de hora de tu reserva
              por favor notifícanos vía WhatsApp o llamada telefónica, al: 099
              770 2994.
            </li>
            <li>
              También puedes realizar tu reservación vía WhatsApp o llamada
              telefónica.
            </li>
            <li>
              El restaurante no garantiza ubicación de la mesa al momento de
              realizar la reservación.
            </li>
            <li>
              Las reservaciones solicitadas fuera de nuestros horarios de
              atención serán confirmadas dentro de los siguientes horarios:
              Martes a Sábado de 11:30 am - 10:30pm.
            </li>
          </ul>
        </S.ImportantInfo>
        <Button
          fullWidth
          className="continueBtn"
          type="submit"
          // onClick={() => setCurrentStep(STEPS.PERSONAL_DATA)}
        >
          Confirmar Reservación
          <ArrowForwardIcon />
        </Button>
      </Grid>
    </Grid>
  )
}
export default StepThree
