import React, { useEffect, useState } from "react"
import {
  deleteReservation,
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
  sendConfirmationSMSHost,
  sendEmail,
} from "../../utils"
import Pepper from "../../assets/pepper-red.svg"
import { auth, firestore } from "../../services/firebase"
import moment from "moment"
import ReservationDialog from "./reservation-dialog/reservation-dialog.component"
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
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import { CheckCircle, DoDisturb } from "@mui/icons-material"

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
      // .where("status", "==", "Pendiente")
      .orderBy("createdAt", "desc")
      // .orderBy("status", "desc")
      .limit(500)
      .onSnapshot(snapshot => {
        const listItems = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
          date: moment
            .unix(doc.data()?.date?.seconds)
            .format("DD/MM/YYYY kk:mm"),
          createdAt: moment
            .unix(doc.data()?.createdAt?.seconds)
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
      name: "createdAt",
      label: "Fecha creación",
      options: {
        filter: false,
        sort: true,
        searchable: false,
      },
    },
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

  const handleCellClick = (colData, { dataIndex }) => {
    setSelectedDataIndex(dataIndex)
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

  const HeaderSelectedElements = ({ data }) => (
    <Box sx={{ paddingRight: "1rem" }}>
      <Tooltip title="Borrar">
        <IconButton onClick={() => handleDelete(data)}>
          <DeleteForeverIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Cancelar">
        <IconButton onClick={() => handleCancel(data)}>
          <DoDisturb />
        </IconButton>
      </Tooltip>
      <Tooltip title="Aprobar">
        <IconButton onClick={() => handleApprove(data)}>
          <CheckCircle />
        </IconButton>
      </Tooltip>
    </Box>
  )

  const handleSignOut = () => {
    auth.signOut().then(
      res => {},
      e => {}
    )
  }

  const handleDelete = async selectedRows => {
    if (selectedRows && selectedRows.length) {
      setIsLoading(true)
      await Promise.all(
        selectedRows.map(async ({ dataIndex }) => {
          await deleteReservation(data[dataIndex].id)
        })
      )
    }
    setIsLoading(false)
  }

  const handleApprove = async selectedRows => {
    if (selectedRows && selectedRows.length) {
      setIsLoading(true)
      await Promise.all(
        selectedRows.map(async ({ dataIndex }) => {
          const currentData = data[dataIndex]
          const formattedData = getFormattedReservationData(currentData)
          await updateReservationData(currentData.id, {
            ...formattedData,
            status: "Aprobado",
          })

          await sendEmail(formattedData, emailTypes.CUSTOMER_CONFIRMATION)
          await sendConfirmationSMS({
            ...formattedData,
            date: `${moment(currentData.date, "DD-MM-YYYY HH:mm").format(
              "DD/MM/YYYY"
            )} a las ${moment(currentData.date, "DD-MM-YYYY HH:mm").format(
              "HH:mm"
            )}`,
          })
        })
      )
    }
    setIsLoading(false)
  }

  const handleCancel = async selectedRows => {
    if (selectedRows && selectedRows.length) {
      setIsLoading(true)
      await Promise.all(
        selectedRows.map(async ({ dataIndex }) => {
          const currentData = data[dataIndex]
          const formattedData = getFormattedReservationData(currentData)
          await updateReservationData(currentData.id, {
            ...formattedData,
            status: "Cancelado",
          })

          await sendEmail(formattedData, emailTypes.CUSTOMER_CANCELED)
          await sendCancellationSMS(formattedData)
        })
      )
    }
    setIsLoading(false)
  }

  const options = {
    filterType: "multiselect",
    responsive: "standard",
    count: data.length,
    onCellClick: handleCellClick,
    // selectableRows: "none",
    // onRowsDelete: handleDelete,
    customToolbar: () => <HeaderElements />,
    customToolbarSelect: props => <HeaderSelectedElements {...props} />,
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
