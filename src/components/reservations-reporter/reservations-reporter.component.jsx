import React, { useEffect, useState } from "react"
import {
  setReservation,
  updateReservationData,
} from "../../services/reservations"
import * as S from "./reservations-reporter.styles"
import LoadableMuiDataTable from "../../components/loadable-mui-data-table/loadable-mui-data-table"
import Spinner from "../spinner/spinner.component"
import {
  emailTypes,
  getFormattedReservationData,
  sendCancellationSMS,
  sendConfirmationSMS,
  sendEmail,
} from "../../utils"
import Pepper from "../../assets/pepper-red.svg"
import { auth, firestore } from "../../services/firebase"
import moment from "moment"
import ReservationDialog from "./reservation-dialog/reservation-dialog.component"
import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"
import {
  IconButton,
  Tooltip,
  Box,
  Dialog,
  Typography,
  DialogContent,
  Grid,
} from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout"
import CustomButton from "../custom-button/custom-button.component"

export const STATUSES = {
  approved: "Aprobado",
  pending: "Pendiente",
  canceled: "Cancelado",
}

const ReservationsReporter = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [shouldEdit, setShouldEdit] = useState(true)
  const [selectedDataIndex, setSelectedDataIndex] = useState(null)
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [data, setData] = useState([])
  const [isWarningDialogOpen, setIsWarningDialogOpen] = useState(false)

  useEffect(() => {
    //added variable unsubscribe
    const unsubscribe = firestore
      .collection("reservations")
      .onSnapshot(snapshot => {
        const listItems = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
          date: moment
            .unix(doc.data()?.date?.seconds)
            .format("DD/MM/YYYY kk:mm"),
        }))
        setData(listItems)
      })
    //called the unsubscribe--closing connection to Firestore.
    return () => unsubscribe()
  }, [])

  const handleCellprops = (cellValue, rowIndex, columnIndex) => {
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
      name: "occasion",
      label: "Ocasión",
      options: {
        filter: false,
        sort: false,
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
    setSelectedDataIndex(rowIndex)
    setShouldEdit(true)
    setIsOpenDialog(true)
  }

  const handleAddReservation = () => {
    setShouldEdit(false)
    setIsOpenDialog(true)
  }

  const HeaderElements = () => (
    <>
      <Tooltip title="Añadir nueva reservación">
        <IconButton onClick={handleAddReservation}>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Cerrar sesión">
        <IconButton onClick={() => setIsWarningDialogOpen(true)}>
          <LogoutIcon />
        </IconButton>
      </Tooltip>
    </>
  )

  const handleSignOut = () => {
    auth.signOut().then(
      res => {},
      e => {}
    )
  }

  const options = {
    filterType: "multiselect",
    responsive: "standard",
    count: data.length,
    onCellClick: handleCellClick,
    selectableRows: "none",
    customToolbar: () => <HeaderElements />,
  }

  const handleDataInput = async formData => {
    const formattedData = getFormattedReservationData(formData)
    const currentReservationData = data[selectedDataIndex]
    setIsLoading(true)

    if (shouldEdit) {
      await updateReservationData(currentReservationData.id, formattedData)
    } else {
      await setReservation({
        ...formattedData,
      })
    }
    if (formData.status === STATUSES.approved) {
      await sendEmail(formattedData, emailTypes.CUSTOMER_CONFIRMATION)
      await sendConfirmationSMS({
        ...formattedData,
        date: `${moment(formData.date, "YYYY/MM/DD").format(
          "DD/MM/YYYY"
        )} a las ${formData.time}`,
      })
    }

    if (formData.status === STATUSES.canceled) {
      await sendEmail(formattedData, emailTypes.CUSTOMER_CANCELED)
      await sendCancellationSMS(formattedData)
    }

    setIsLoading(false)
    setIsOpenDialog(false)
  }

  return (
    <S.Wrapper>
      {isLoading && <Spinner />}
      <LoadableMuiDataTable
        className="reservationsTable"
        title={
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Pepper />
            <span style={{ marginLeft: "0.5rem" }}>Bahn Mi Reservaciones</span>
          </Box>
        }
        data={data}
        columns={columns}
        options={options}
      />

      <ReservationDialog
        handleDataInput={handleDataInput}
        shouldEdit={shouldEdit}
        isLoading={isLoading}
        onClose={() => setIsOpenDialog(false)}
        open={isOpenDialog}
        data={data[selectedDataIndex]}
      />

      <Dialog
        maxWidth="sm"
        fullWidth
        onClose={() => setIsWarningDialogOpen(false)}
        open={isWarningDialogOpen}
      >
        <DialogContent>
          <Typography style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Estás seguro que deseas cerrar sesión?
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CustomButton fullWidth onClick={handleSignOut}>
                Si
              </CustomButton>
            </Grid>
            <Grid item xs={6}>
              <CustomButton className="darkBorder" fullWidth>
                Cancelar
              </CustomButton>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </S.Wrapper>
  )
}

export default ReservationsReporter
