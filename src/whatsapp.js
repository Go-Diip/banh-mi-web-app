import whatsapp from "whatsapp-web-api"

const sendMessage = async (phoneNumber, message) => {
  const client = whatsapp.createClient({
    phoneNumber,
    appId: "YOUR_APP_ID",
    appSecret: "YOUR_APP_SECRET",
  })

  try {
    await client.sendMessage(message)
    console.log("Message sent successfully!")
  } catch (error) {
    console.log(error)
  }
}

export default sendMessage
