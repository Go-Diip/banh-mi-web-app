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
export const MIN_DATE = moment(new Date())
export const MAX_DATE = moment(MIN_DATE).add(4, "week")
export const timeOptions = [
  {
    value: "12:30",
    label: "12:30 PM",
  },
  {
    value: "12:45",
    label: "12:45 PM",
  },
  {
    value: "13:00",
    label: "1:00 PM",
  },
  {
    value: "13:15",
    label: "1:15 PM",
  },
  {
    value: "13:30",
    label: "1:30 PM",
  },
  {
    value: "13:45",
    label: "1:45 PM",
  },
  {
    value: "14:00",
    label: "2:00 PM",
  },
  {
    value: "14:15",
    label: "2:15 PM",
  },
  {
    value: "14:30",
    label: "2:30 PM",
  },
  {
    value: "14:45",
    label: "2:45 PM",
  },
  {
    value: "15:00",
    label: "3:00 PM",
  },
  // {
  //   value: "18:00",
  //   label: "6:00 PM",
  // },
  // {
  //   value: "18:15",
  //   label: "6:15 PM",
  // },
  // {
  //   value: "18:30",
  //   label: "6:30 PM",
  // },
  // {
  //   value: "18:45",
  //   label: "6:45 PM",
  // },
  {
    value: "19:00",
    label: "7:00 PM",
  },
  {
    value: "19:15",
    label: "7:15 PM",
  },
  {
    value: "19:30",
    label: "7:30 PM",
  },
  {
    value: "20:00",
    label: "8:00 PM",
  },
  {
    value: "20:15",
    label: "8:15 PM",
  },
  {
    value: "20:30",
    label: "8:30 PM",
  },
  {
    value: "20:45",
    label: "8:45 PM",
  },
  {
    value: "21:00",
    label: "9:00 PM",
  },
  {
    value: "21:15",
    label: "9:15 PM",
  },
  {
    value: "21:30",
    label: "9:30 PM",
  },
  {
    value: "21:45",
    label: "9:45 PM",
  },
  {
    value: "22:00",
    label: "10:00 PM",
  },
]
export const seatsOptions = [
  {
    value: 1,
    label: "1 Persona",
  },
  {
    value: 2,
    label: "2 Personas",
  },
  {
    value: 3,
    label: "3 Personas",
  },
  {
    value: 4,
    label: "4 Personas",
  },
  {
    value: 5,
    label: "5 Personas",
  },
  {
    value: 6,
    label: "6 Personas",
  },
  {
    value: 7,
    label: "7 Personas",
  },
  {
    value: 8,
    label: "8 Personas",
  },
  {
    value: 9,
    label: "9 Personas",
  },
  {
    value: 10,
    label: "10 Personas",
  },
]
const StepOne = ({ setCurrentStep }) => {
  const { register, setValue } = useFormContext()
  const [selectedDate, setSelectedDate] = useState(MIN_DATE)
  const [dateOpen, setDateOpen] = useState(false)

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
            options={seatsOptions}
            name="seats"
            label="Personas"
            defaultValue={seatsOptions[0].value}
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
            defaultValue={timeOptions[0].value}
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
            Reservar
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
