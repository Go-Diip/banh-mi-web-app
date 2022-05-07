exports.handler = (event, context) => {
  const accountSid = `${process.env.TWILIO_ACCOUNT_SID}` // Your Account SID from www.twilio.com/console
  const authToken = `${process.env.TWILIO_AUTH_TOKEN}` // Your Auth Token from www.twilio.com/console
  const { phone, text } = event.body

  // console.log(req.body)

  if (!phone) {
    console.log("No phone provided. Was not able to send unavailable SMS.")
    return "No phone provided. Was not able to send unavailable SMS."
  }
  const phoneFormatted = `+593${phone.substring(1)}`

  const twilio = require("twilio")
  const client = new twilio(accountSid, authToken)

  client.messages
    .create({
      body: text,
      to: `whatsapp:${phoneFormatted}`, // Text this number
      from: "whatsapp:+17869778091", // From a valid Twilio number
    })
    .then(message => ({ statusCode: 200, body: JSON.stringify({ message }) }))
    .catch(e => ({
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    }))
}
