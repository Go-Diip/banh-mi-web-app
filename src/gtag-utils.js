import { isBrowser } from "./utils"

export const sendGtagOrderOnlineEvent = () => {
  if (isBrowser() && window.gtag) {
    window.gtag("event", "link_click", {
      event_category: "Links",
      event_action: "Click",
      event_label: "Order online link",
    })
  }
}

export const sendGtagReservationMadeEvent = () => {
  if (isBrowser() && window.gtag) {
    window.gtag("event", "form_submit", {
      event_category: "Forms",
      event_action: "Submit",
      event_label: "Reservation",
    })
  }
}

export const sendGtagNewsletterSubmit = () => {
  if (isBrowser() && window.gtag) {
    window.gtag("event", "form_submit", {
      event_category: "Forms",
      event_action: "Submit",
      event_label: "Newsletter",
    })
  }
}

export const sendGtagPrivateEventSubmit = () => {
  if (isBrowser() && window.gtag) {
    window.gtag("event", "form_submit", {
      event_category: "Forms",
      event_action: "Submit",
      event_label: "Private event",
    })
  }
}

export const sendGtagWorkWithUsSubmit = () => {
  if (isBrowser() && window.gtag) {
    window.gtag("event", "form_submit", {
      event_category: "Forms",
      event_action: "Submit",
      event_label: "Work with us",
    })
  }
}
