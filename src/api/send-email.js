import * as ics from "ics"

export default function handler(req, res) {
  try {
    const formData = require("form-data")
    const Mailgun = require("mailgun.js")
    const mailgun = new Mailgun(formData)
    const { data, emailData } = req.body

    const st = new Date(data.date)
    const meetingEvent = {
      start: [
        st.getFullYear(),
        st.getMonth(),
        st.getDate(),
        st.getHours(),
        st.getMinutes(),
      ],
      duration: { hours: 1, minutes: 0 },
      title: `Reservación en Banh Mi`,
      description: "Rervación de mesa en Banh Mi.",
      location: "Andalucía N24-234 y, Quito 170143",
      geo: { lat: -0.20641203783465234, lon: -78.48452230059952 },
      status: "CONFIRMED",
      organizer: { name: "Banh Mi", email: "banhmireservas@gmail.com" },
      attendees: [
        { name: `${data.firstName} ${data.lastName}`, email: data.email },
      ],
    }

    const icsFile = ics.createEvent(meetingEvent)
    const fileData = new Buffer(icsFile.value)
    if (fileData) {
      emailData.attachment = {
        data: fileData,
        filename: "Reservation Invite.ics",
        contentType: "text/calendar",
      }
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
    res.send(e)
  }
}
