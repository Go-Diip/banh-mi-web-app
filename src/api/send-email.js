import * as ics from "ics"
import { getEmailData } from "../utils"

export default function handler(req, res) {
  const formData = require("form-data")
  const Mailgun = require("mailgun.js")
  const mailgun = new Mailgun(formData)
  const { data, emailType } = req.body

  const st = new Date(date)
  const meetingEvent = {
    start: [
      st.getFullYear(),
      st.getMonth() + 1,
      st.getDate(),
      st.getHours(),
      st.getMinutes(),
    ],
    duration: { hours: 1, minutes: 0 },
    title: `Banh Mi Reservación - ${data.firstName}`,
    description: "Rervación de mesa en Banh Mi.",
    location: "Andalucía N24-234 y, Quito 170143",
    geo: { lat: -0.20641203783465234, lon: -78.48452230059952 },
    status: "CONFIRMED",
    productId: "myproduct",
    organizer: { name: "Banh Mi", email: "banhmireservas@gmail.com" },
    attendees: [
      { name: `${data.firstName} ${data.lastName}`, email: data.email },
    ],
  }

  const icsFile = ics.createEvent(meetingEvent)
  console.log("icsFile", icsFile)
  const fileData = new Buffer(icsFile.value)
  console.log("ICS meeting invite created")
  data.attachment = {
    data: fileData,
    filename: "Reservation Invite.ics",
    contentType: "text/calendar",
  }

  // res.status(200).json({ hello: `world` })

  const mg = mailgun.client({
    username: process.env.GATSBY_MAILGUN_USERNAME,
    key: process.env.GATSBY_MAILGUN_API_KEY,
  })

  mg.messages
    .create("mg.banhmi.ec", getEmailData(data, emailType))
    .then(msg => console.log(msg)) // l
}
