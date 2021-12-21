import React, { useEffect, useState } from "react"
import { getReservations } from "../../services/reservations"
import * as S from "./reservations-reporter.styles"
import LoadableMuiDataTable from "../../components/loadable-mui-data-table/loadable-mui-data-table"

const ReservationsReporter = () => {
  const [data, setData] = useState([])

  console.log("data", data)

  useEffect(() => {
    getReservations().then(res => setData(res))
  }, [])

  const handleCellprops = (cellValue, rowIndex, columnIndex) => {
    console.log("cellValue", cellValue)
    switch (cellValue) {
      case "Pendiente":
        return {
          className: "pending",
        }
      case "Aprobado":
        return {
          className: "approved",
        }
      case "Cancelado":
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

  const handleStatusClick = (colData, cellMeta) => {
    console.log("colData", colData)
    console.log("cellMeta", cellMeta)
  }

  const options = {
    filterType: "multiselect",
    responsive: "standard",
    count: data.length,
    onCellClick: handleStatusClick,
    // selectableRows: "none",
  }

  return (
    <S.Wrapper>
      <LoadableMuiDataTable
        title={"Reservations"}
        data={data}
        columns={columns}
        options={options}
      />
    </S.Wrapper>
  )
}

export default ReservationsReporter
