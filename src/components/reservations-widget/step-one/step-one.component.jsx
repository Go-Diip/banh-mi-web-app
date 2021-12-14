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

const MIN_DATE = moment(new Date())
const MAX_DATE = moment(MIN_DATE).add(2, "week")
const MIN_TIME = moment("9:00", "HH:mm")
const MAX_TIME = moment("20:00", "HH:mm")
const StepOne = ({ setCurrentStep }) => {
  const { register, setValue } = useFormContext()
  const [selectedDate, setSelectedDate] = useState(MIN_DATE)
  const [selectedTime, setSelectedTime] = useState(MIN_TIME)
  const peopleOptions = [
    "1 persona",
    "2 personas",
    "3 personas",
    "4 personas",
    "5 personas",
    "6 personas",
    "7 personas",
    "8 personas",
    "9 personas",
    "10 personas",
  ]

  useEffect(() => {
    setValue("date", moment(selectedDate).format("MMM DD, YYYY"))
  }, [selectedDate])

  useEffect(() => {
    setValue("time", moment(selectedTime).format("HH:mm"))
  }, [selectedTime])

  return (
    <S.Wrapper>
      <Grid container>
        <Grid item xs={12} md>
          <WidgetSelect
            options={peopleOptions}
            name="seats"
            label="Personas"
            defaultValue={peopleOptions[0]}
            isRequired
          />
        </Grid>
        <Grid item xs={12} md>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              label="Fecha"
              inputFormat="MMM DD"
              autoOk
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
                <TextField {...register("date")} {...params} />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <TimePicker
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
              renderInput={params => <TextField {...params} />}
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
