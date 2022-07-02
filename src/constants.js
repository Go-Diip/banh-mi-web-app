import moment from "moment"

export const SEAT_OPTIONS = [
  {
    value: 1,
    label: "1 Persona",
  },
  {
    value: 2,
    label: "2 Personas",
  },
  {
    value: 3,
    label: "3 Personas",
  },
  {
    value: 4,
    label: "4 Personas",
  },
  {
    value: 5,
    label: "5 Personas",
  },
  {
    value: 6,
    label: "6 Personas",
  },
  {
    value: 7,
    label: "7 Personas",
  },
  {
    value: 8,
    label: "8 Personas",
  },
  {
    value: 9,
    label: "9 Personas",
  },
  {
    value: 10,
    label: "10 Personas",
  },
]

export const CURRENT_DATE = moment()

export const MIN_DATE =
  CURRENT_DATE.day() === 0 || CURRENT_DATE.day() === 1
    ? moment().day(2)
    : CURRENT_DATE

export const MAX_DATE = moment(MIN_DATE).add(5, "week")

export const EXCEPTIONAL_DATES = [
  "03 jul. 2022",
  "10 jul. 2022",
  "17 jul. 2022",
  "24 jul. 2022",
  "31 jul. 2022",
]

export const TIME_OPTIONS = [
  {
    value: "12:30",
    label: "12:30 PM",
  },
  {
    value: "12:45",
    label: "12:45 PM",
  },
  {
    value: "13:00",
    label: "1:00 PM",
  },
  {
    value: "13:15",
    label: "1:15 PM",
  },
  {
    value: "13:30",
    label: "1:30 PM",
  },
  {
    value: "13:45",
    label: "1:45 PM",
  },
  {
    value: "14:00",
    label: "2:00 PM",
  },
  {
    value: "14:15",
    label: "2:15 PM",
  },
  {
    value: "14:30",
    label: "2:30 PM",
  },
  {
    value: "14:45",
    label: "2:45 PM",
  },
  {
    value: "15:00",
    label: "3:00 PM",
  },
  // {
  //   value: "18:00",
  //   label: "6:00 PM",
  // },
  // {
  //   value: "18:15",
  //   label: "6:15 PM",
  // },
  // {
  //   value: "18:30",
  //   label: "6:30 PM",
  // },
  // {
  //   value: "18:45",
  //   label: "6:45 PM",
  // },
  {
    value: "19:00",
    label: "7:00 PM",
  },
  {
    value: "19:15",
    label: "7:15 PM",
  },
  {
    value: "19:30",
    label: "7:30 PM",
  },
  {
    value: "20:00",
    label: "8:00 PM",
  },
  {
    value: "20:15",
    label: "8:15 PM",
  },
  {
    value: "20:30",
    label: "8:30 PM",
  },
  {
    value: "20:45",
    label: "8:45 PM",
  },
  {
    value: "21:00",
    label: "9:00 PM",
  },
  {
    value: "21:15",
    label: "9:15 PM",
  },
  {
    value: "21:30",
    label: "9:30 PM",
  },
  {
    value: "21:45",
    label: "9:45 PM",
  },
  {
    value: "22:00",
    label: "10:00 PM",
  },
]

export const EXCEPTIONAL_TIMES = [
  {
    value: "12:30",
    label: "12:30 PM",
  },
  {
    value: "12:45",
    label: "12:45 PM",
  },
  {
    value: "13:00",
    label: "1:00 PM",
  },
  {
    value: "13:15",
    label: "1:15 PM",
  },
  {
    value: "13:30",
    label: "1:30 PM",
  },
  {
    value: "13:45",
    label: "1:45 PM",
  },
  {
    value: "14:00",
    label: "2:00 PM",
  },
  {
    value: "14:15",
    label: "2:15 PM",
  },
  {
    value: "14:30",
    label: "2:30 PM",
  },
  {
    value: "14:45",
    label: "2:45 PM",
  },
  {
    value: "15:00",
    label: "3:00 PM",
  },
  {
    value: "15:15",
    label: "3:15 PM",
  },
  {
    value: "15:30",
    label: "3:30 PM",
  },
  {
    value: "15:45",
    label: "3:45 PM",
  },
  {
    value: "16:00",
    label: "4:00 PM",
  },
  {
    value: "16:15",
    label: "4:15 PM",
  },
]