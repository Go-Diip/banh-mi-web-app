import React, { useEffect, useState } from "react"
import { updateReservationData } from "../../services/reservations"
import * as S from "./reservations-reporter.styles"
import LoadableMuiDataTable from "../../components/loadable-mui-data-table/loadable-mui-data-table"
import Spinner from "../spinner/spinner.component"
import { emailTypes, getFormattedReservationData, sendEmail } from "../../utils"
import { firestore } from "../../services/firebase"
import moment from "moment"
import ReservationDialog from "./reservation-dialog/reservation-dialog.component"
import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"
import { IconButton, Tooltip } from "@mui/material"

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
    </>
  )

  const options = {
    filterType: "multiselect",
    responsive: "standard",
    count: data.length,
    onCellClick: handleCellClick,
    selectableRows: "none",
    customToolbar: () => <HeaderElements />,
  }

  const handleDataInput = formData => {
    const formattedData = getFormattedReservationData(formData)
    const currentReservationData = data[selectedDataIndex]
    setIsLoading(true)

    if (shouldEdit) {
      updateReservationData(currentReservationData.id, formattedData).then(
        response => {
          if (formData.status === STATUSES.approved) {
            sendEmail(formattedData, emailTypes.CUSTOMER_CONFIRMATION)
          }

          if (formData.status === STATUSES.canceled) {
            sendEmail(formattedData, emailTypes.CUSTOMER_CANCELED)
          }

          setIsLoading(false)
          setIsOpenDialog(false)
        }
      )
    } else {
      //  TODO add new reservation here
    }
  }

  return (
    <S.Wrapper>
      {isLoading && <Spinner />}
      <LoadableMuiDataTable
        title="Bahn Mi Reservaciones"
        data={data}
        columns={columns}
        options={options}
      />

      <ReservationDialog
        handleDataInput={handleDataInput}
        shouldEdit={shouldEdit}
        onClose={() => setIsOpenDialog(false)}
        open={isOpenDialog}
        data={data[selectedDataIndex]}
      />
    </S.Wrapper>
  )
}

export default ReservationsReporter
