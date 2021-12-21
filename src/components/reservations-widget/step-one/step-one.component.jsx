import React, { useEffect, useState } from "react"
import * as S from "./step-one.styles.jsx"
import { Button, Grid, InputAdornment, TextField } from "@mui/material"
import WidgetSelect from "../widget-select/widget-select.component"
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/lab"
import DateAdapter from "@mui/lab/AdapterMoment"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { STEPS } from "../reservations-widget.component"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import moment from "moment"
import { useFormContext } from "react-hook-form"
import { getReservations } from "../../../services/reservations"

const MIN_DATE = moment(new Date())
const MAX_DATE = moment(MIN_DATE).add(2, "week")
const MIN_TIME = moment("9:00", "HH:mm")
const MAX_TIME = moment("20:00", "HH:mm")
const StepOne = ({ setCurrentStep }) => {
  const { register, setValue } = useFormContext()
  const [selectedDate, setSelectedDate] = useState(MIN_DATE)
  const [selectedTime, setSelectedTime] = useState(MIN_TIME)
  const [dateOpen, setDateOpen] = useState(false)
  const [timeOpen, setTimeOpen] = useState(false)
  // const peopleOptions = [
  //   "1 persona",
  //   "2 personas",
  //   "3 personas",
  //   "4 personas",
  //   "5 personas",
  //   "6 personas",
  //   "7 personas",
  //   "8 personas",
  //   "9 personas",
  //   "10 personas",
  // ]
  const peopleOptions = [
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

  useEffect(() => {
    setValue("date", moment(selectedDate).format("YYYY/MM/DD"))
  }, [selectedDate])

  useEffect(() => {
    setValue("time", moment(selectedTime).format("HH:mm:ss"))
  }, [selectedTime])

  return (
    <S.Wrapper>
      <Grid container>
        <Grid item xs={12} md>
          <WidgetSelect
            options={peopleOptions}
            name="seats"
            label="Personas"
            defaultValue={peopleOptions[0].value}
            isRequired
          />
        </Grid>
        <Grid item xs={12} md>
          <LocalizationProvider dateAdapter={DateAdapter}>
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
              // value={value}
              // onChange={handleChange}
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
          <LocalizationProvider dateAdapter={DateAdapter}>
            <TimePicker
              onOpen={() => setTimeOpen(true)}
              onClose={() => setTimeOpen(false)}
              open={timeOpen}
              label="Hora"
              autoOk
              minutesStep={30}
              value={selectedTime}
              maxTime={MAX_TIME}
              minTime={MIN_TIME}
              onChange={time => setSelectedTime(time)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccessTimeIcon />
                  </InputAdornment>
                ),
              }}
              InputAdornmentProps={{ position: "start" }}
              renderInput={params => (
                <TextField
                  fullWidth
                  className="time"
                  onClick={() => setTimeOpen(true)}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
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
    </S.Wrapper>
  )
}
export default StepOne
