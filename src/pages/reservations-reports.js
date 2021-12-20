import React from "react"
import MUIDataTable from "mui-datatables"

const ReservationsReport = () => {
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
      name: "notes",
      label: "Notas",
      options: {
        filter: false,
        sort: false,
      },
    },
  ]

  const data = [
    {
      name: "Joe James",
      email: "email@gmail.com",
      phone: "+593963077807",
      seats: 2,
      area: "restaurante",
      date: "Dec 10 2021, 5:00 PM",
      notes: "una nota",
    },
    {
      name: "Joe James",
      email: "email@gmail.com",
      phone: "+593963077807",
      seats: 10,
      area: "restaurante",
      date: "Dec 10 2021, 5:00 PM",
      notes: "una nota",
    },
  ]

  const options = {
    filterType: "multiselect",
  }

  return (
    <MUIDataTable
      title={"Reservations"}
      data={data}
      columns={columns}
      options={options}
    />
  )
}

export default ReservationsReport
