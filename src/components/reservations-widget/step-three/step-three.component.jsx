import React from "react"
import * as S from "./step-three.styles.jsx"
import { Button, Grid, Typography } from "@mui/material"
import WidgetTextField from "../widget-text-field/widget-text-field.component"
import { NotesField } from "./step-three.styles.jsx"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useFormContext } from "react-hook-form"

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
          <Typography>{`${values[2]} a las ${values[3]}`}</Typography>
        </S.ReviewBox>
        <S.ReviewBox>
          <label>Lugar</label>
          <Typography>{values[4]}</Typography>
        </S.ReviewBox>
        <NotesField>
          <Typography sx={{ fontWeight: "300" }}>
            Requerimiento especial
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
          Reservar
          <ArrowForwardIcon />
        </Button>
      </Grid>
    </Grid>
  )
}
export default StepThree
