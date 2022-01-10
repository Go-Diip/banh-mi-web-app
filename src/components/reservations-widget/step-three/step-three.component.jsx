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
]

const StepThree = () => {
  const { register, getValues } = useFormContext()
  const values = getValues(["name", "seats", "date", "time", "area"])
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <S.Title>Tu Reserva</S.Title>
        <S.ReviewBox>
          <label>Reservador por</label>
          <Typography>{values[0]}</Typography>
        </S.ReviewBox>
        <S.ReviewBox>
          <label>Puestos reservados</label>
          <Typography>{values[1]}</Typography>
        </S.ReviewBox>
        <S.ReviewBox>
          <label>Reservado para el</label>
          <Typography>{`${values[2]} a las ${values[3]?.label}`}</Typography>
        </S.ReviewBox>
        <S.ReviewBox>
          <label>Lugar</label>
          <Typography>{values[4]}</Typography>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae
            dignissimos, dolore ipsa molestias repellendus velit. Animi
            blanditiis, consequuntur dolorem, ducimus esse explicabo nobis omnis
            pariatur possimus, quam recusandae suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae
            dignissimos, dolore ipsa molestias repellendus velit. Animi
            blanditiis, consequuntur dolorem, ducimus esse explicabo nobis omnis
            pariatur possimus, quam recusandae suscipit?
          </p>
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
