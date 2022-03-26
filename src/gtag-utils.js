import { isBrowser } from "./utils"

export const sendGtagOrderOnlineEvent = () => {
  if (isBrowser() && window.gtag) {
    window.gtag("event", "order_online_click")
    // window.gtag("event", "order_online_click", {
    //   event_category: "Links",
    //   event_action: "Click",
    //   event_label: "Order online link",
    // })
  }
}

export const sendGtagReservationMadeEvent = () => {
  if (isBrowser() && window.gtag) {
    window.gtag("event", "create_reservation")
    // window.gtag("event", "form_submit", {
    //   event_category: "Forms",
    //   event_action: "Submit",
    //   event_label: "Reservation",
    // })
  }
}

export const sendGtagNewsletterSubmit = () => {
  if (isBrowser() && window.gtag) {
    window.gtag("event", "newsletter_form_submit")
    // window.gtag("event", "form_submit", {
    //   event_category: "Forms",
    //   event_action: "Submit",
    //   event_label: "Newsletter",
    // })
  }
}

export const sendGtagPrivateEventSubmit = () => {
  if (isBrowser() && window.gtag) {
    window.gtag("event", "private_event_form_submit")
    // window.gtag("event", "form_submit", {
    //   event_category: "Forms",
    //   event_action: "Submit",
    //   event_label: "Private event",
    // })
  }
}

export const sendGtagWorkWithUsSubmit = () => {
  if (isBrowser() && window.gtag) {
    window.gtag("event", "work_with_us_form_submit")
    // window.gtag("event", "form_submit", {
    //   event_category: "Forms",
    //   event_action: "Submit",
    //   event_label: "Work with us",
    // })
  }
}
