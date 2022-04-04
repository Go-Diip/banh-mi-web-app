import React, { useEffect } from "react"

import Layout from "../components/layout"
import ReservationsWidget from "../components/reservations-widget/reservations-widget.component"
import LogRocket from "logrocket"

const Reservations = () => {
  useEffect(() => {
    if (process.env.GATSBY_ACTIVE_ENV === "production") {
      LogRocket.init("3qav1j/reservations")
    }
  }, [])
  return (
    <Layout
      seo={{ title: "Reservaciones | Banh Mi " }}
      showFooter={false}
      showHeader={false}
    >
      <ReservationsWidget />
    </Layout>
  )
}

export default Reservations
