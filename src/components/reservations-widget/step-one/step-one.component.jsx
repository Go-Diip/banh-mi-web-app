import React from "react"
import * as S from "./step-one.styles.jsx"
import { Button, Grid, TextField } from "@mui/material"
import WidgetSelect from "../widget-select/widget-select.component"
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/lab"
import DateAdapter from "@mui/lab/AdapterMoment"

const StepOne = () => {
  const peopleOptions = ["1 persona", "2 personas", "3 personas"]
  return (
    <S.Wrapper>
      <Grid container>
        <Grid item xs={12} md>
          <WidgetSelect
            options={peopleOptions}
            name="people"
            label="Personas"
            // defaultValue={peopleOptions[0]}
            isRequired
          />
        </Grid>
        <Grid item xs={12} md>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              label="Fecha"
              inputFormat="MM/DD"
              views={["day", "month"]}
              // value={value}
              // onChange={handleChange}
              renderInput={params => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <TimePicker
              label="Hora"
              // value={value}
              // onChange={handleChange}
              renderInput={params => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md>
          <Button fullWidth className="continueBtn" type="button">
            Reservar
          </Button>
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}
export default StepOne
