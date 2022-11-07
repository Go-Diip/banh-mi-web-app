export default function handler(req, res) {
  try {
    const accountSid = `${process.env.TWILIO_ACCOUNT_SID}` // Your Account SID from www.twilio.com/console
    const authToken = `${process.env.TWILIO_AUTH_TOKEN}` // Your Auth Token from www.twilio.com/console
    const { phone, text } = req.body

    // console.log(req.body)

    if (!phone) {
      res.send("No phone provided. Was not able to send WhatsApp message.")
    }
    const phoneFormatted = `+593${phone
      .substring(1)
      .replace(/\s/g, "")
      .replace("-", "")}`

    const twilio = require("twilio")
    const client = new twilio(accountSid, authToken)

    client.messages
      .create({
        body: text,
        to: `whatsapp:${phoneFormatted}`, // Text this number
        from: "whatsapp:+12343124766", // From a valid Twilio number
      })
      .then(message => res.send(message))
      .catch(e => res.send(e))
  } catch (e) {
    res.send(e)
  }
}
