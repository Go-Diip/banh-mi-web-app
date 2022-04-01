import React, { useEffect, useRef, useState } from "react"
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
  sendCanceledSMS,
  sendConfirmationSMS,
  sendEmail,
  sendUnavailableSMS,
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
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout"
import CustomButton from "../custom-button/custom-button.component"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import { CheckCircle, DoDisturb } from "@mui/icons-material"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const STATUSES = {
  approved: "Aprobado",
  pending: "Pendiente",
  canceled: "Cancelado",
  unavailable: "No Disponible",
}

export const TURNS = {
  all: "todos",
  lunch: "almuerzo",
  dinner: "cena",
}

const ReservationsReporter = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [shouldEdit, setShouldEdit] = useState(true)
  const [selectedDataIndex, setSelectedDataIndex] = useState(null)
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [data, setData] = useState([])
  const [isWarningDialogOpen, setIsWarningDialogOpen] = useState(false)
  const [dataToShow, setDataToShow] = useState([])
  const [turn, setTurn] = useState(TURNS.all)
  const prevDataRef = useRef()

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
            .format("DD/MM/YYYY HH:mm"),
          createdAt: moment
            .unix(doc.data()?.createdAt?.seconds)
            .format("DD/MM/YYYY HH:mm"),
        }))
        setData(listItems)
      })
    //called the unsubscribe--closing connection to Firestore.
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (data && data.length && turn) {
      const prevData = prevDataRef.current
      if (prevData && prevData.length) {
        if (data.length > prevData.length) {
          const lastReservation = data[0]
          if (lastReservation.source === "web") {
            toast.warn("Nueva reservación recibida")
          }
        }
      }
      const lunchMin = moment("12:29", "HH:mm")
      const lunchMax = moment("15:30", "HH:mm")
      const dinnerMin = moment("18:59", "HH:mm")
      const dinnerMax = moment("23:59", "HH:mm")
      let filteredData = data

      if (turn === TURNS.dinner) {
        filteredData = data.filter(item => {
          const reservationTimeString = moment(
            item.date,
            "DD/MM/YYYY HH:mm"
          ).format("HH:mm")
          const reservationTime = moment(reservationTimeString, "HH:mm")
          return (
            reservationTime.isAfter(dinnerMin) &&
            reservationTime.isBefore(dinnerMax)
          )
        })
      }

      if (turn === TURNS.lunch) {
        filteredData = data.filter(item => {
          const reservationTimeString = moment(
            item.date,
            "DD/MM/YYYY HH:mm"
          ).format("HH:mm")
          const reservationTime = moment(reservationTimeString, "HH:mm")
          return (
            reservationTime.isAfter(lunchMin) &&
            reservationTime.isBefore(lunchMax)
          )
        })
      }
      prevDataRef.current = data
      setDataToShow(filteredData)
    }
  }, [data, turn])

  const handleCellprops = (cellValue, rowIndex, columnIndex) => {
    let className = "statusBtn "
    switch (cellValue) {
      case STATUSES.pending:
        return {
          className: (className += "pending"),
        }
      case STATUSES.approved:
        return {
          className: (className += "approved"),
        }
      case STATUSES.canceled:
        return {
          className: (className += "canceled"),
        }
      case STATUSES.unavailable:
        return {
          className: (className += "unavailable"),
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
        setCellProps: () => ({ className: "date" }),
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
        setCellProps: () => ({ className: "date" }),
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
      <ExtraFilters />
    </>
  )

  const ExtraFilters = () => (
    <S.FilterWrapper>
      <FormControl fullWidth>
        <InputLabel id="turnos">Turnos</InputLabel>
        <Select
          labelId="turnos"
          value={turn}
          label="Turnos"
          onChange={e => setTurn(e.target.value)}
        >
          <MenuItem value={TURNS.all}>Todos</MenuItem>
          <MenuItem value={TURNS.lunch}>Almuerzo</MenuItem>
          <MenuItem value={TURNS.dinner}>Cena</MenuItem>
        </Select>
      </FormControl>
    </S.FilterWrapper>
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
          await deleteReservation(dataToShow[dataIndex].id)
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
          const currentData = dataToShow[dataIndex]
          if (currentData?.status !== STATUSES.approved) {
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
          }
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
          const currentData = dataToShow[dataIndex]
          if (currentData?.status !== STATUSES.canceled) {
            const formattedData = getFormattedReservationData(currentData)
            await updateReservationData(currentData.id, {
              ...formattedData,
              status: "Cancelado",
            })
            await sendEmail(formattedData, emailTypes.CUSTOMER_CANCELED)
          }
        })
      )
    }
    setIsLoading(false)
  }

  const options = {
    filterType: "multiselect",
    responsive: "standard",
    count: data.length,
    rowsPerPage: 100,
    onCellClick: handleCellClick,
    // selectableRows: "none",
    // onRowsDelete: handleDelete,
    customToolbar: () => <HeaderElements />,
    customToolbarSelect: props => <HeaderSelectedElements {...props} />,
  }

  const handleDataInput = async formData => {
    const formattedData = getFormattedReservationData(formData)
    const currentReservationData = dataToShow[selectedDataIndex]
    setIsLoading(true)

    if (shouldEdit) {
      await updateReservationData(currentReservationData.id, formattedData)
    } else {
      await setReservation({
        ...formattedData,
      })
    }
    if (formData.status === STATUSES.approved) {
      if (
        !currentReservationData ||
        currentReservationData?.status !== STATUSES.approved
      ) {
        await sendEmail(formattedData, emailTypes.CUSTOMER_CONFIRMATION)
        await sendConfirmationSMS({
          ...formattedData,
          date: `${moment(formData.date, "YYYY/MM/DD").format(
            "DD/MM/YYYY"
          )} a las ${formData.time}`,
        })
      }
    }

    if (formData.status === STATUSES.unavailable) {
      if (
        !currentReservationData ||
        currentReservationData?.status !== STATUSES.unavailable
      ) {
        await sendEmail(formattedData, emailTypes.CUSTOMER_UNAVAILABLE)
        await sendUnavailableSMS(formattedData)
      }
    }

    if (formData.status === STATUSES.canceled) {
      if (
        !currentReservationData ||
        currentReservationData?.status !== STATUSES.canceled
      ) {
        await sendEmail(formattedData, emailTypes.CUSTOMER_CANCELED)
        await sendCanceledSMS(formattedData)
      }
    }

    setIsLoading(false)
    setIsOpenDialog(false)
  }

  return (
    <S.Wrapper>
      <ToastContainer />
      {isLoading && <Spinner />}
      <LoadableMuiDataTable
        className="reservationsTable"
        title={
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Pepper />
            <span style={{ marginLeft: "0.5rem" }}>Bahn Mi Reservaciones</span>
          </Box>
        }
        data={dataToShow}
        columns={columns}
        options={options}
      />

      <ReservationDialog
        handleDataInput={handleDataInput}
        shouldEdit={shouldEdit}
        isLoading={isLoading}
        onClose={() => setIsOpenDialog(false)}
        open={isOpenDialog}
        data={dataToShow[selectedDataIndex]}
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
