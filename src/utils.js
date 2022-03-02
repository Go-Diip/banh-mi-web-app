import queryString from "query-string"
import Cookies from "js-cookie"
import { gravityFormsApi, HUBSPOT_API, IPIFY_API, twilioApi } from "./apis/apis"
import CryptoJS from "crypto-js"
import canceledEmail from "./emails/canceled-email"
import approvedEmail from "./emails/approved-email"
import clientNotification from "./emails/client-notification"
import { STATUSES } from "./components/reservations-reporter/reservations-reporter.component"
import moment from "moment"
import "moment/locale/es"

export const isBrowser = () => typeof window !== "undefined"

export const emailTypes = {
  CUSTOMER_NOTIFICATION: "Customer Notification",
  CUSTOMER_CONFIRMATION: "Customer Confirmation",
  CUSTOMER_CANCELED: "Customer Canceled",
  CLIENT_NOTIFICATION: "Client Notification",
}

export const getEmailData = (
  { email, name, last_name, table, seats, date },
  emailType
) => {
  const formattedDate = moment(date, "DD MMM YYYY hh:mm", "es").format(
    "DD MMM YYYY h:mm A"
  )
  switch (emailType) {
    case emailTypes.CUSTOMER_NOTIFICATION:
      return {
        from: "Banh Mi <no-reply@banhmi.ec>",
        to: [email],
        cc: "banhmireservas@gmail.com",
        subject: "Reservación Pre-aprobada",
        html: `<p>Recibimos tu reservacion ${name}!</p>`,
      }
    case emailTypes.CUSTOMER_CONFIRMATION:
      return {
        from: "Banh Mi  <no-reply@banhmi.com>",
        to: [email],
        cc: "banhmireservas@gmail.com",
        subject: `Reservación Confirmada! ${name} ${formattedDate}`,
        html: approvedEmail(name, last_name, formattedDate, seats),
      }
    case emailTypes.CUSTOMER_CANCELED:
      return {
        from: "Banh Mi  <no-reply@banhmi.ec>",
        to: [email],
        cc: "banhmireservas@gmail.com",
        subject: "Reservación Cancelada",
        html: canceledEmail(name),
      }
    case emailTypes.CLIENT_NOTIFICATION:
      return {
        from: "Banhmi <no-reply@banhmi.ec>",
        to: "hello@godiip.com",
        cc: "banhmireservas@gmail.com",
        subject: "Nueva Reservación recibida",
        html: clientNotification(),
      }
  }
}

export const getLocalStorageItem = key => {
  if (isBrowser()) {
    return window.localStorage.getItem(key)
  }
  return null
}

export const setLocalStorageItem = (key, value) => {
  if (isBrowser()) {
    window.localStorage.setItem(key, value)
  }
}

export const getColor = (color, theme) => {
  switch (color) {
    case "primary":
      return theme.palette.primary.main
    case "secondary":
      return theme.palette.secondary.main
    case "tertiary":
      return theme.palette.tertiary.main
    case "content":
      return theme.palette.text.content
    default:
      return theme.palette.text.primary
  }
}

export const textEllipsis = (
  str,
  maxLength,
  { side = "end", ellipsis = "..." } = {}
) => {
  if (str.length > maxLength) {
    switch (side) {
      case "start":
        return ellipsis + str.slice(-(maxLength - ellipsis.length))
      case "end":
      default:
        return str.slice(0, maxLength - ellipsis.length) + ellipsis
    }
  }
  return str
}

export const setFormUtmParams = setValue => {
  if (typeof window !== "undefined" && window) {
    const parameters = window.location.search
      ? queryString.parse(window.location.search)
      : ""
    const params = [
      "utm_medium",
      "utm_source",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "utm_name",
    ]
    if (parameters !== "") {
      params.map(param => {
        if (param in parameters) {
          setValue(param, parameters[param])
        }
      })
    }
  }
}

export const submitHubspotForm = async (data, portalId, formId) => {
  let fields = []
  Object.entries(data).map(item => {
    fields.push({ name: item[0], value: item[1] })
  })

  const isBrowser = typeof window !== "undefined"
  const hutk = isBrowser ? Cookies.get("hubspotutk") : null
  const pageUri = isBrowser ? window.location.href : null
  const pageName = isBrowser ? document.title : null
  const ipAddress = await IPIFY_API.get()

  const context =
    ipAddress && ipAddress.data.ip
      ? {
          ipAddress: ipAddress.data.ip,
          hutk,
          pageUri,
          pageName,
        }
      : {
          hutk,
          pageUri,
          pageName,
        }

  try {
    const res = await HUBSPOT_API.post(
      `/${portalId}/${formId}`,
      JSON.stringify({
        submittedAt: Date.now(),
        fields,
        context,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Accept:
            "application/json, application/xml, text/plain, text/html, *.*",
        },
      }
    )

    return res
  } catch (e) {
    return e.response
  }
}

const calculateSignature = (stringToSign, privateKey) => {
  const hash = CryptoJS.HmacSHA1(stringToSign, privateKey)
  const base64 = hash.toString(CryptoJS.enc.Base64)
  return encodeURIComponent(base64)
}

export const submitGravityForm = (data, formId) => {
  const d = new Date(),
    expiration = 3600,
    unixtime = parseInt(d.getTime() / 1000),
    future_unixtime = unixtime + expiration,
    publicKey = process.env.GF_PUB_KEY,
    privateKey = process.env.GF_PRIV_KEY,
    method = "POST",
    route = `forms/${formId}/submissions`,
    stringToSign =
      publicKey + ":" + method + ":" + route + ":" + future_unixtime,
    sig = calculateSignature(stringToSign, privateKey)

  const uri =
    route +
    "?api_key=" +
    publicKey +
    "&signature=" +
    sig +
    "&expires=" +
    future_unixtime

  const values = {
    input_values: {
      data,
    },
  }

  return gravityFormsApi
    .post(uri, values, {
      headers: { "Content-Type": "application/json" },
    })
    .then(response => {
      return response
    })
}

export const validateEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const validatePhone = number => number?.match(/\d/g)?.length === 10

export const sendEmail = async (data, emailType) => {
  if (!data.email) {
    console.log("Was not able to send the email. No email address provided.")
    return
  }
  const formData = require("form-data")
  const Mailgun = require("mailgun.js")
  const mailgun = new Mailgun(formData)
  const mg = mailgun.client({
    username: process.env.GATSBY_MAILGUN_USERNAME,
    key: process.env.GATSBY_MAILGUN_API_KEY,
  })

  // mg.messages.create('mg.godiip.com', {
  //   from: "Excited User <mailgun@sandbox-123.mailgun.org>",
  //   to: ["valladarespaul@gmail.com"],
  //   subject: "Hello",
  //   text: "Testing some Mailgun awesomness!",
  //   html: "<h1>Testing some Mailgun awesomness!</h1>"
  // })
  //   .then(msg => console.log(msg)) // logs response data
  //   .catch(err => console.log(err)); // logs any error

  try {
    return await mg.messages.create(
      "mg.banhmi.ec",
      getEmailData(data, emailType)
    )
  } catch (e) {
    return e
  }
}

export const getFormattedReservationData = data => {
  const date = data.time
    ? new Date(`${data.date} ${data.time}`)
    : moment(data.date, "DD-MM-YYYY HH:mm").toDate()

  const createdAt = date.createdAt ? new Date(date.createdAt) : new Date()
  // const phoneFormatted = `+593${data.phone.substring(1)}`
  return {
    createdAt,
    name: data.name,
    last_name: data.last_name,
    email: data.email,
    phone: data.phone,
    area: data.area,
    date,
    seats: data.seats ? parseInt(data.seats) : "",
    occasion: data.occasion,
    table: data.table ?? "-",
    notes: data.notes ?? "",
    status: data.status ?? STATUSES.pending,
  }
}

export const disableMondays = date => {
  return date.day() === 1 || date.day() === 0
}

export const sendConfirmationSMS = async data => {
  if (!data.phone) {
    console.log("No phone provided. Was not able to send confirmation SMS.")
    return
  }
  const phoneFormatted = `+593${data.phone.substring(1)}`
  try {
    return await twilioApi.post(
      "/send-sms",
      new URLSearchParams({
        to: phoneFormatted,
        // prettier-ignore
        body: `Banh Mi: Hola, ${data.name}. Tu reservacion el dia ${data.date} esta confirmada.`,
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          Accept:
            "application/json, application/xml, text/plain, text/html, *.*",
        },
      }
    )
  } catch (e) {}
}

export const sendNewReservationSMS = async data => {
  const phoneFormatted = `+593997702994`
  try {
    return await twilioApi.post(
      "/send-sms",
      new URLSearchParams({
        to: phoneFormatted,
        // prettier-ignore
        body: `Banh Mi: Nueva reservación de ${data.name} el dia ${data.date}.`,
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          Accept:
            "application/json, application/xml, text/plain, text/html, *.*",
        },
      }
    )
  } catch (e) {}
}

export const sendConfirmationSMSHost = async data => {
  const phoneFormatted = `+593997702994`
  try {
    return await twilioApi.post(
      "/send-sms",
      new URLSearchParams({
        to: phoneFormatted,
        // prettier-ignore
        body: `Banh Mi: Reservacion confirmada para ${data.name} el dia ${data.date}.`,
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          Accept:
            "application/json, application/xml, text/plain, text/html, *.*",
        },
      }
    )
  } catch (e) {}
}

export const sendUnavailableSMS = async data => {
  if (!data.phone) {
    console.log("No phone provided. Was not able to send cancellation SMS.")
    return
  }
  const phoneFormatted = `+593${data.phone.substring(1)}`
  try {
    return await twilioApi.post(
      "/send-sms",
      new URLSearchParams({
        to: phoneFormatted,
        // prettier-ignore
        body: `Banh Mi: Hola, ${data.name}. Al momento no hemos podido confirmar tu reservacion. Pronto te contactaran directamente para poder asisitirte.`,
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          Accept:
            "application/json, application/xml, text/plain, text/html, *.*",
        },
      }
    )
  } catch (e) {}
}
