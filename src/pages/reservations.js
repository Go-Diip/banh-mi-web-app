import React from "react"

import Layout from "../components/layout"
import ReservationsWidget from "../components/reservations-widget/reservations-widget.component"

const Reservations = () => (
  <Layout seo={{ title: "Reservations" }} showFooter={false} showHeader={false}>
    <ReservationsWidget />
  </Layout>
)

export default Reservations
