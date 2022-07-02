import React, { useEffect, useState } from "react"
import * as S from "./step-one.styles.jsx"
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material"
import WidgetSelect from "../widget-select/widget-select.component"
import { DatePicker, LocalizationProvider } from "@mui/lab"
import DateAdapter from "@mui/lab/AdapterMoment"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { STEPS } from "../reservations-widget.component"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import moment from "moment"
import "moment/locale/es"
import { useFormContext } from "react-hook-form"
import { Disclaimer } from "../reservations-widget.styles"
import { disableMondays } from "../../../utils"
import {
  EXCEPTIONAL_DATES,
  EXCEPTIONAL_TIMES,
  MAX_DATE,
  MIN_DATE,
  SEAT_OPTIONS,
  TIME_OPTIONS,
} from "../../../constants"

const StepOne = ({ setCurrentStep }) => {
  const { register, setValue } = useFormContext()
  const [selectedDate, setSelectedDate] = useState(MIN_DATE)
  const [dateOpen, setDateOpen] = useState(false)
  const isExceptionalDate = EXCEPTIONAL_DATES.includes(
    selectedDate.format("DD MMM YYYY")
  )
  const timeOptions = isExceptionalDate ? EXCEPTIONAL_TIMES : TIME_OPTIONS

  useEffect(() => {
    setValue("date", moment(selectedDate).format("YYYY/MM/DD"))
  }, [selectedDate])

  // useEffect(() => {
  //   setValue("time", moment(selectedTime).format("HH:mm:ss"))
  // }, [selectedTime])

  return (
    <S.Wrapper>
      <Grid container>
        <Grid item xs={12} md>
          <WidgetSelect
            options={SEAT_OPTIONS}
            name="seats"
            label="Personas"
            defaultValue={SEAT_OPTIONS[0].value}
            isRequired
          />
        </Grid>
        <Grid item xs={12} md>
          <LocalizationProvider dateAdapter={DateAdapter} locale="es">
            <DatePicker
              label="Fecha"
              inputFormat="MMM DD"
              autoOk
              open={dateOpen}
              onOpen={() => setDateOpen(true)}
              onClose={() => setDateOpen(false)}
              value={selectedDate}
              onChange={date => setSelectedDate(date)}
              minDate={MIN_DATE}
              maxDate={MAX_DATE}
              shouldDisableDate={disableMondays}
              variant="inline"
              inputVariant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarTodayIcon />
                  </InputAdornment>
                ),
              }}
              disablePast={true}
              InputAdornmentProps={{ position: "start" }}
              renderInput={params => (
                <TextField
                  className="date"
                  fullWidth
                  onClick={() => setDateOpen(true)}
                  {...register("date")}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md>
          <WidgetSelect
            options={timeOptions}
            name="time"
            label="Hora"
            defaultValue={TIME_OPTIONS[0].value}
            startAdornment={
              <InputAdornment position="start">
                <AccessTimeIcon />
              </InputAdornment>
            }
            isRequired
          />
        </Grid>
        <Grid item xs={12} md>
          <Button
            fullWidth
            className="continueBtn"
            type="button"
            onClick={() => setCurrentStep(STEPS.PERSONAL_DATA)}
          >
            Continuar
            <ArrowForwardIcon />
          </Button>
        </Grid>
      </Grid>
      <Disclaimer>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            {/*<Typography>Horario de atención: Martes a Sábado</Typography>*/}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography>
              <b>Horario </b>
            </Typography>
            <Typography>Martes a Sábado:</Typography>
            <Typography>
              Restaurante <br /> 12:30pm - 3:30pm 7:00pm - 10:30pm
            </Typography>
            <Typography>
              Segundo Piso <br />
              7:00pm - 12:00am
            </Typography>
            <Typography>Domingo y Lunes: cerrados</Typography>
          </Grid>
        </Grid>
      </Disclaimer>
    </S.Wrapper>
  )
}
export default StepOne
