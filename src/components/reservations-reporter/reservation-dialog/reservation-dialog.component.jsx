import React, { useEffect, useState } from "react"
import {
  CircularProgress,
  Dialog,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import Typography from "@mui/material/Typography"
import CustomButton from "../../custom-button/custom-button.component"
import { reasonOptions } from "../../reservations-widget/step-three/step-three.component"
import EmailIcon from "@mui/icons-material/Email"
import * as S from "./reservation-dialog.styles"
import WidgetTextField from "../../reservations-widget/widget-text-field/widget-text-field.component"
import { disableMondays, validatePhone } from "../../../utils"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import { FormProvider, useForm } from "react-hook-form"
import WidgetSelect from "../../reservations-widget/widget-select/widget-select.component"
import { DatePicker, LocalizationProvider } from "@mui/lab"
import DateAdapter from "@mui/lab/AdapterMoment"
import "moment/locale/es"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import {
  MAX_DATE,
  MIN_DATE,
  seatsOptions,
  timeOptions,
} from "../../reservations-widget/step-one/step-one.component"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import moment from "moment"
import { STATUSES } from "../reservations-reporter.component"

const ReservationDialog = ({
  onClose,
  data,
  open,
  handleDataInput,
  shouldEdit,
  isLoading,
}) => {
  const [selectedDate, setSelectedDate] = useState(MIN_DATE)
  const [dateOpen, setDateOpen] = useState(false)
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  })
  const { handleSubmit, register, setValue } = methods

  useEffect(() => {
    if (data && shouldEdit) {
      const momentDate = moment(data.date, "DD/MM/YYYY kk:mm")
      console.log("current date", momentDate)
      setValue("createdAt", data.createdAt)
      setValue("status", data.status)
      setValue("table", data.table)
      setValue("email", data.email)
      setValue("name", data.name)
      setValue("last_name", data.last_name)
      setValue("phone", data.phone)
      setValue("time", momentDate.format("H:mm"))
      setValue("seats", data.seats)
      setValue("area", data.area)
      setValue("occasion", data.occasion)
      setValue("notes", data.notes)

      setSelectedDate(momentDate)
    } else {
      setValue("createdAt", new Date())
      setValue("status", STATUSES.pending)
      setValue("table", "")
      setValue("email", "")
      setValue("name", "")
      setValue("last_name", "")
      setValue("phone", "")
      setValue("time", timeOptions[0].value)
      setValue("seats", "")
      setValue("area", "restaurante")
      setValue("occasion", "ninguna")
      setValue("notes", "")
    }
  }, [data, shouldEdit])

  useEffect(() => {
    setValue("date", moment(selectedDate).format("YYYY/MM/DD"))
  }, [selectedDate])

  return (
    <Dialog onClose={onClose} open={open}>
      <S.DialogWrapper>
        <S.CloseIconButton onClick={onClose}>
          <CloseIcon />
        </S.CloseIconButton>
        <Typography sx={{ marginBottom: "1em" }}>
          {shouldEdit ? "Actualizar reservación" : "Añadir Reservación"}
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleDataInput)}>
            <input type="hidden" {...register("createdAt")} />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <WidgetSelect
                  options={[
                    STATUSES.pending,
                    STATUSES.approved,
                    STATUSES.unavailable,
                    STATUSES.canceled,
                  ]}
                  name="status"
                  label="Estado"
                  isRequired
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <WidgetTextField name="table" label="Mesa" placeholder="Mesa" />
              </Grid>
              <Grid item xs={12} md={6}>
                <WidgetTextField
                  name="name"
                  label="Nombre"
                  placeholder="Nombre"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <WidgetTextField
                  name="last_name"
                  label="Apellidos"
                  placeholder="Apellidos"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <WidgetTextField
                  name="email"
                  label="Email"
                  placeholder="Email"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <WidgetTextField
                  name="phone"
                  label="Teléfono"
                  placeholder="Teléfono celular"
                  // validate={validatePhone}
                  type="number"
                  customError="Por favor ingresa un número válido de 10 digitos"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LocalPhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <WidgetSelect
                  options={seatsOptions}
                  name="seats"
                  label="Puestos"
                />
              </Grid>
              <Grid item xs={12} md={6}>
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
                    variant="inline"
                    inputVariant="outlined"
                    shouldDisableDate={disableMondays}
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

              <Grid item xs={12} md={6}>
                <WidgetSelect
                  options={timeOptions}
                  name="time"
                  label="Hora"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccessTimeIcon />
                    </InputAdornment>
                  }
                  isRequired
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <WidgetSelect
                  options={[
                    {
                      label: "Restaurante",
                      value: "restaurante",
                    },
                    {
                      label: "Segundo Piso",
                      value: "segundo piso",
                    },
                  ]}
                  name="area"
                  label="Ambiente"
                  isRequired
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <WidgetSelect
                  options={reasonOptions}
                  name="occasion"
                  label="Ocasión (opcional)"
                />
              </Grid>
              <Grid item xs={12}>
                <WidgetTextField
                  name="notes"
                  label="Notas"
                  placeholder="Notas"
                  multiline
                  rows={2}
                />
              </Grid>
            </Grid>

            <CustomButton
              style={{ marginTop: "1.5em" }}
              fullWidth
              disabled={!!isLoading}
              type="submit"
            >
              Guardar
              {isLoading && (
                <CircularProgress
                  style={{ marginLeft: ".5em", color: "black" }}
                  size={20}
                />
              )}
            </CustomButton>
          </form>
        </FormProvider>
      </S.DialogWrapper>
    </Dialog>
  )
}

export default ReservationDialog
