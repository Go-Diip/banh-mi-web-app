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

export const AREAS = {
  RESTAURANTE: {
    value: "restaurante",
    label: "Restaurante",
  },
  BAR: {
    value: "segundo piso",
    label: "Segundo Piso",
  },
}

export const CURRENT_DATE = moment()

// Days restaurant will open regardless of being sunday or monday
export const EXCEPTIONAL_DATES = ["2024-05-12"]

// TODO add here exceptional bar open dates and times
export const EXCEPTIONAL_BAR_OPEN_DATES = ["2023/02/14"]
export const EXCEPTIONAL_BAR_OPEN_TIMES = [
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
]

// TODO add a date here to prevent from showing this day on the calendar
// Days restaurant will open regardless of being any day from tuesday to saturday
export const CLOSE_DATES = ["2024-03-17"]

export const MIN_DATE =
  // TODO uncomment this line to enable the restaurant to be closed on sundays and mondays
  (CURRENT_DATE.day() === 0 || CURRENT_DATE.day() === 1) &&
  // CURRENT_DATE.day() === 1 &&
  !EXCEPTIONAL_DATES.includes(CURRENT_DATE.format("DD MMM YYYY"))
    ? moment().day(2)
    : CURRENT_DATE

export const MAX_DATE = moment(MIN_DATE).add(5, "week")

export const ALL_TIME_OPTIONS = [
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
  // {
  //   value: "20:00",
  //   label: "8:00 PM",
  // },
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
  {
    value: "22:30",
    label: "10:30 PM",
  },
]
export const ALL_TIME_OPTIONS_ADMIN = [
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
  {
    value: "16:30",
    label: "4:30 PM",
  },
  {
    value: "5:30",
    label: "5:30 PM",
  },
  {
    value: "18:00",
    label: "6:00 PM",
  },
  {
    value: "18:15",
    label: "6:15 PM",
  },
  {
    value: "18:30",
    label: "6:30 PM",
  },
  {
    value: "18:45",
    label: "6:45 PM",
  },
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
  // {
  //   value: "20:00",
  //   label: "8:00 PM",
  // },
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
  {
    value: "22:30",
    label: "10:30 PM",
  },
]

// TODO edit this manually everytime the restaurant requires to block times with the required day
export const BLOCKED_DATES = ["2024-03-08"]
// TODO add the times with the corresponding date and area you would like to block, if the area is empty all areas will be blocked
export const BLOCKED_TIMES = [
  // {
  //   value: "12:30",
  //   label: "12:30 PM",
  //   date: BLOCKED_DATES[1],
  // },
  // {
  //   value: "12:45",
  //   label: "12:45 PM",
  //   date: BLOCKED_DATES[1],
  // },
  // {
  //   value: "13:00",
  //   label: "1:00 PM",
  //   date: BLOCKED_DATES[1],
  // },
  // {
  //   value: "13:15",
  //   label: "1:15 PM",
  //   date: BLOCKED_DATES[1],
  // },
  // {
  //   value: "13:30",
  //   label: "1:30 PM",
  //   date: BLOCKED_DATES[1],
  // },
  // {
  //   value: "13:45",
  //   label: "1:45 PM",
  //   date: BLOCKED_DATES[1],
  // },
  // {
  //   value: "14:00",
  //   label: "2:00 PM",
  //   date: BLOCKED_DATES[1],
  // },
  // {
  //   value: "14:15",
  //   label: "2:15 PM",
  //   date: BLOCKED_DATES[1],
  // },
  // {
  //   value: "14:30",
  //   label: "2:30 PM",
  //   date: BLOCKED_DATES[1],
  // },
  // {
  //   value: "14:45",
  //   label: "2:45 PM",
  //   date: BLOCKED_DATES[1],
  // },
  // {
  //   value: "15:00",
  //   label: "3:00 PM",
  //   date: BLOCKED_DATES[1],
  // },
  // {
  //   value: "18:00",
  //   label: "6:00 PM",
  //   date: BLOCKED_DATES[1],
  // },
  // {
  //   value: "18:15",
  //   label: "6:15 PM",
  //   date: BLOCKED_DATES[1],
  // },
  // {
  //   value: "18:30",
  //   label: "6:30 PM",
  //   date: BLOCKED_DATES[1],
  // },
  // {
  //   value: "18:45",
  //   label: "6:45 PM",
  //   date: BLOCKED_DATES[1],
  // },
  // {
  //   value: "19:00",
  //   label: "7:00 PM",
  //   area: AREAS.BAR.value,
  // },
  // {
  //   value: "19:15",
  //   label: "7:15 PM",
  //   area: AREAS.BAR.value,
  // },
  {
    value: "19:30",
    label: "7:30 PM",
    // area: AREAS.BAR.value,
  },
  {
    value: "20:00",
    label: "8:00 PM",
  },
  {
    value: "20:15",
    label: "8:15 PM",
    // area: AREAS.BAR.value,
  },
  {
    value: "20:30",
    label: "8:30 PM",
    // area: AREAS.BAR.value,
  },
  {
    value: "20:45",
    label: "8:45 PM",
    // area: AREAS.BAR.value,
  },
  // {
  //   value: "21:00",
  //   label: "9:00 PM",
  //   area: AREAS.BAR.value,
  // },
  // {
  //   value: "21:15",
  //   label: "9:15 PM",
  //   area: AREAS.BAR.value,
  // },
  // {
  //   value: "21:30",
  //   label: "9:30 PM",
  // },
  // {
  //   value: "21:45",
  //   label: "9:45 PM",
  //   area: AREAS.BAR.value,
  // },
  // {
  //   value: "22:00",
  //   label: "10:00 PM",
  //   area: AREAS.BAR.value,
  // },
  // {
  //   value: "22:30",
  //   label: "10:30 PM",
  //   area: AREAS.BAR.value,
  // },
  // {
  //   value: "22:00",
  //   label: "10:00 PM",
  //   // date: BLOCKED_DATES[0],
  //   // area: AREAS.RESTAURANTE.value,
  // },
]

// ADD THE AVAILABLE TIMES FOR THE EXCEPTIONAL DAYS
export const EXCEPTIONAL_TIMES = [
  // {
  //   value: "12:30",
  //   label: "12:30 PM",
  // },
  // {
  //   value: "12:45",
  //   label: "12:45 PM",
  // },
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
]
export const SATURDAY_EXCEPTIONAL_TIMES = [
  // {
  //   value: "12:30",
  //   label: "12:30 PM",
  // },
  // {
  //   value: "12:45",
  //   label: "12:45 PM",
  // },
  {
    value: "13:00",
    label: "1:00 PM",
  },
  // {
  //   value: "14:00",
  //   label: "2:00 PM",
  // },
  // {
  //   value: "14:30",
  //   label: "2:30 PM",
  // },
  {
    value: "14:45",
    label: "2:45 PM",
  },
  {
    value: "15:00",
    label: "3:00 PM",
  },
  {
    value: "15:30",
    label: "3:30 PM",
  },
  // {
  //   value: "15:30",
  //   label: "3:30 PM",
  // },
  // {
  //   value: "16:14",
  //   label: "4:14 PM",
  // },
  {
    value: "16:30",
    label: "4:30 PM",
  },
  {
    value: "17:00",
    label: "5:00 PM",
  },
  // {
  //   value: "17:15",
  //   label: "5:15 PM",
  // },
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
  // {
  //   value: "20:00",
  //   label: "8:00 PM",
  // },
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
  {
    value: "22:30",
    label: "10:30 PM",
  },
]

export const SUNDAY_EXCEPTIONAL_TIMES = [
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
  //   value: "15:15",
  //   label: "3:15 PM",
  // },
  // {
  //   value: "15:30",
  //   label: "3:30 PM",
  // },
  // {
  //   value: "15:45",
  //   label: "3:45 PM",
  // },
  // {
  //   value: "16:00",
  //   label: "4:00 PM",
  // },
  // {
  //   value: "16:15",
  //   label: "4:15 PM",
  // },
  // {
  //   value: "16:30",
  //   label: "4:30 PM",
  // },
]
