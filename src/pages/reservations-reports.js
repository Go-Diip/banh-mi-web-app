import React, { useEffect, useState } from "react"
import { getReservations } from "../services/reservations"
import LoadableMuiDataTable from "../components/loadable-mui-data-table/loadable-mui-data-table"

const ReservationsReport = () => {
  const [data, setData] = useState([])

  console.log("data", data)

  useEffect(() => {
    getReservations().then(res => setData(res))
  }, [])

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

  const options = {
    filterType: "multiselect",
    responsive: "standard",
    count: data.length,
    selectableRows: "none",
  }

  return (
    <LoadableMuiDataTable
      title={"Reservations"}
      data={data}
      columns={columns}
      options={options}
    />
  )
}

export default ReservationsReport
