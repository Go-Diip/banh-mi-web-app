import * as ics from "ics"

export default function handler(req, res) {
  try {
    const formData = require("form-data")
    const Mailgun = require("mailgun.js")
    const mailgun = new Mailgun(formData)
    const { data, emailData } = req.body

    const st = new Date(data.date)
    const event = {
      title: "Reservación en Banh Mi",
      description: "Rervación de mesa en Banh Mi.",
      start: [
        st.getFullYear(),
        st.getMonth(),
        st.getDate(),
        st.getHours(),
        st.getMinutes(),
      ],
      duration: { hours: 1, minutes: 0 },
      status: "CONFIRMED",
      busyStatus: "BUSY",
      organizer: { name: "Banh Mi", email: "banhmireservas@gmail.com" },
      location: "Andalucía N24-234 y, Quito 170143",
      geo: { lat: -0.20641203783465234, lon: -78.48452230059952 },
      attendees: [
        { name: `${data.firstName} ${data.lastName}`, email: data.email },
      ],
    }

    try {
      const icsFile = ics.createEvent(event)
      const fileData = new Buffer(icsFile.value)
      if (fileData) {
        emailData.attachment = {
          data: fileData,
          filename: "Reservation Invite.ics",
          contentType: "text/calendar",
        }
      }
    } catch (error) {
      console.log("Error creating icsFile", error)
    }

    const mg = mailgun.client({
      username: process.env.GATSBY_MAILGUN_USERNAME,
      key: process.env.GATSBY_MAILGUN_API_KEY,
    })

    mg.messages
      .create("mg.banhmi.ec", emailData)
      .then(message => res.send(message))
      .catch(e => res.send(e))
  } catch (e) {
    console.log("ERROR", e)
    res.send(e)
  }
}
