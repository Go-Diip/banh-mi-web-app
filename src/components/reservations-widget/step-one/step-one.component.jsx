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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { STEPS } from "../reservations-widget.component"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import moment from "moment"
import "moment/locale/es"
import { useFormContext } from "react-hook-form"
import { disableMondays, getTimeOptions } from "../../../utils"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import {
  EXCEPTIONAL_DATES,
  EXCEPTIONAL_TIMES,
  MAX_DATE,
  MIN_DATE,
  SEAT_OPTIONS,
} from "../../../constants"

const inputNames = ["seats", "date", "time"]

const StepOne = ({ setCurrentStep }) => {
  const { register, setValue, trigger } = useFormContext()
  const [selectedDate, setSelectedDate] = useState(MIN_DATE)
  const [dateOpen, setDateOpen] = useState(false)
  const isExceptionalDate = EXCEPTIONAL_DATES.includes(
    selectedDate.format("DD MMM YYYY")
  )
  const timeOptions = isExceptionalDate
    ? EXCEPTIONAL_TIMES
    : getTimeOptions(selectedDate)

  const handleNext = () => {
    trigger(inputNames).then(res => {
      if (res) {
        setCurrentStep(STEPS.PERSONAL_DATA)
      }
    })
  }

  useEffect(() => {
    setValue("date", moment(selectedDate).format("YYYY/MM/DD"))
  }, [selectedDate])

  useEffect(() => {
    setValue("time", timeOptions[0]?.value)
  }, [timeOptions])

  // useEffect(() => {
  //   setValue("time", moment(selectedTime).format("HH:mm:ss"))
  // }, [selectedTime])

  return (
    <S.Wrapper>
      <Grid container>
        <Grid item xs={12} md>
          <WidgetSelect
            options={SEAT_OPTIONS}
            name={inputNames[0]}
            label="Personas"
            defaultValue={SEAT_OPTIONS[0].value}
            isRequired
          />
        </Grid>
        <Grid item xs={12} md>
          <LocalizationProvider dateAdapter={AdapterMoment} locale="es">
            <DatePicker
              label="Fecha"
              inputFormat="MMM DD"
              autoOk
              open={dateOpen}
              onOpen={() => setDateOpen(true)}
              onClose={() => setDateOpen(false)}
              value={selectedDate}
              date={selectedDate}
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
                  {...register(inputNames[1], { required: true })}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md>
          <WidgetSelect
            options={timeOptions}
            name={inputNames[2]}
            label="Hora"
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
            onClick={handleNext}
          >
            Continuar
            <ArrowForwardIcon />
          </Button>
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}
export default StepOne
