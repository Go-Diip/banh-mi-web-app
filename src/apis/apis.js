const axios = require("axios")

export const HUBSPOT_API = axios.create({
  baseURL: "https://api.hsforms.com/submissions/v3/integration/submit",
})

export const IPIFY_API = axios.create({
  baseURL: "https://api.ipify.org?format=json",
})

export const gravityFormsApi = axios.create({
  baseURL: `https://admin.domain.com/gravityformsapi/
`,
})

export const contactFormApi = axios.create({
  baseURL: `https://admin-banhmi.godiip.com/wp-json/contact-form-7/v1/contact-forms`,
})

export const twilioApi = axios.create({
  baseURL: `https://dandelion-tortoise-9096.twil.io`,
})
