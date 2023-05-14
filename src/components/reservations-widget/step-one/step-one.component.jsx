import React, { useEffect, useState } from "react"
import * as S from "./step-one.styles.jsx"
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Tooltip,
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
import { disableMondays, getBlockedAreas, getTimeOptions } from "../../../utils"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import {
  AREAS,
  EXCEPTIONAL_DATES,
  EXCEPTIONAL_TIMES,
  MAX_DATE,
  MIN_DATE,
  SEAT_OPTIONS,
} from "../../../constants"
import { getValue } from "@mui/system"

const inputNames = ["seats", "date", "time"]

const StepOne = ({ setCurrentStep }) => {
  const { register, setValue, trigger, watch } = useFormContext()
  const [selectedDate, setSelectedDate] = useState(MIN_DATE)
  const [dateOpen, setDateOpen] = useState(false)
  const selectedTime = watch("time")
  const isExceptionalDate = EXCEPTIONAL_DATES.includes(
    selectedDate.format("YYYY-MM-DD")
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
    const newDate = moment(selectedDate).format("YYYY/MM/DD")
    const currentDate = getValue("date")

    if (newDate !== currentDate) {
      setValue("date", moment(selectedDate).format("YYYY/MM/DD"))
    }
  }, [selectedDate])

  useEffect(() => {
    setValue("time", timeOptions[0]?.value)
  }, [])

  const blockedAreas = getBlockedAreas(selectedDate, selectedTime)
  const areAllAreasBlocked =
    blockedAreas && blockedAreas?.length === AREAS.length

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
              disableMaskedInput
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
                  onKeyDown={e => e.preventDefault()}
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
            disabled={areAllAreasBlocked}
            className="continueBtn"
            type="button"
            onClick={handleNext}
          >
            Continuar
            <ArrowForwardIcon />
          </Button>
        </Grid>
        {areAllAreasBlocked && (
          <Grid item xs={12}>
            <Typography mt={1} variant="body2" color="error">
              No hay mesas disponibles para la fecha y hora seleccionadas.
            </Typography>
          </Grid>
        )}
      </Grid>
    </S.Wrapper>
  )
}
export default StepOne
