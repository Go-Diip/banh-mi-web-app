import React, { useEffect, useState } from "react"
import { updateReservationStatus } from "../../services/reservations"
import * as S from "./reservations-reporter.styles"
import LoadableMuiDataTable from "../../components/loadable-mui-data-table/loadable-mui-data-table"
import {
  Dialog,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import Typography from "@mui/material/Typography"
import CustomButton from "../custom-button/custom-button.component"
import { useForm } from "react-hook-form"
import Spinner from "../spinner/spinner.component"
import CloseIcon from "@mui/icons-material/Close"
import { emailTypes, sendEmail } from "../../utils"
import { firestore } from "../../services/firebase"
import moment from "moment"

export const STATUSES = {
  approved: "Aprobado",
  pending: "Pendiente",
  canceled: "Cancelado",
}

const ReservationsReporter = () => {
  const { register, handleSubmit } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedDataIndex, setSelectedDataIndex] = useState(null)
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  // const data = useReservations()
  const [data, setData] = useState([])

  console.log("selectedDataIndex", selectedDataIndex)
  console.log("data", data)

  useEffect(() => {
    //added variable unsubscribe
    const unsubscribe = firestore
      .collection("reservations")
      .onSnapshot(snapshot => {
        const listItems = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
          date: moment.unix(doc.data().date.seconds).format("DD/MM/YYYY kk:mm"),
        }))
        setData(listItems)
      })
    //called the unsubscribe--closing connection to Firestore.
    return () => unsubscribe()
  }, [])

  const handleCellprops = (cellValue, rowIndex, columnIndex) => {
    console.log("cellValue", cellValue)
    switch (cellValue) {
      case STATUSES.pending:
        return {
          className: "pending",
        }
      case STATUSES.approved:
        return {
          className: "approved",
        }
      case STATUSES.canceled:
        return {
          className: "canceled",
        }
    }
  }

  const columns = [
    {
      name: "name",
      label: "Nombre",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "last_name",
      label: "Apellido",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "phone",
      label: "Teléfono",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "seats",
      label: "Puestos",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "table",
      label: "Mesa",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "area",
      label: "Ambiente",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "date",
      label: "Fecha",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "status",
      label: "Estado",
      options: {
        filter: true,
        sort: true,
        setCellProps: handleCellprops,
      },
    },
    {
      name: "notes",
      label: "Notas",
      options: {
        filter: false,
        sort: false,
      },
    },
  ]

  const handleCellClick = (colData, { rowIndex }) => {
    console.log("ROW INDEX", rowIndex)
    setSelectedDataIndex(rowIndex)
    setIsOpenDialog(true)
  }

  const options = {
    filterType: "multiselect",
    responsive: "standard",
    count: data.length,
    onCellClick: handleCellClick,
    selectableRows: "none",
  }

  const handleDataUpdate = formData => {
    setIsLoading(true)
    console.log("formData", formData)
    const reservationData = data[selectedDataIndex]
    console.log("selectedIndexTable", reservationData)

    updateReservationStatus(reservationData.id, formData).then(response => {
      console.log("responseUpdate", response)
      if (reservationData.status === STATUSES.approved) {
        sendEmail(
          reservationData.email,
          reservationData.name,
          reservationData.table,
          emailTypes.CUSTOMER_CONFIRMATION
        )
      }

      if (reservationData.status === STATUSES.canceled) {
        sendEmail(
          reservationData.email,
          reservationData.name,
          reservationData.table,
          emailTypes.CUSTOMER_CANCELED
        )
      }

      setIsLoading(false)
      setIsOpenDialog(false)
    })
  }

  return (
    <S.Wrapper>
      {isLoading && <Spinner />}
      <LoadableMuiDataTable
        title={"Reservaciones Banh Mi"}
        data={data}
        columns={columns}
        options={options}
      />

      <Dialog onClose={() => setIsOpenDialog(false)} open={isOpenDialog}>
        <S.DialogWrapper>
          <S.CloseIconButton onClick={() => setIsOpenDialog(false)}>
            <CloseIcon />
          </S.CloseIconButton>
          <Typography sx={{ marginBottom: "1em" }}>
            Actualizar reservación
          </Typography>
          <form onSubmit={handleSubmit(handleDataUpdate)}>
            <FormControl fullWidth>
              <InputLabel id="statusUpdate">Estado</InputLabel>
              <Select
                {...register("status")}
                label="Estado"
                labelId="statusUpdate"
                fullWidth
                color="inputs"
                defaultValue={data[selectedDataIndex]?.status}
                // onChange={handleChange}
              >
                <MenuItem value={STATUSES.pending}>Pendiente</MenuItem>
                <MenuItem value={STATUSES.canceled}>Cancelado</MenuItem>
                <MenuItem value={STATUSES.approved}>Aprobado</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Mesa"
              {...register("table")}
              fullWidth
              margin="normal"
              type="number"
              color="inputs"
              defaultValue={data[selectedDataIndex]?.table}
            />
            <CustomButton
              style={{ marginTop: "1.5em" }}
              fullWidth
              type="submit"
            >
              Guardar
            </CustomButton>
          </form>
        </S.DialogWrapper>
      </Dialog>
    </S.Wrapper>
  )
}

export default ReservationsReporter
