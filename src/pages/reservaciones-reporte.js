import React, { useEffect, useState } from "react"
import { auth } from "../services/firebase"
import Layout from "../components/layout"
import Login from "../components/login/login.component"
import ReservationsReporter from "../components/reservations-reporter/reservations-reporter.component"
import LogRocket from "logrocket"

const ReservacionesReporte = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (process.env.GATSBY_ACTIVE_ENV === "production") {
      LogRocket.init("3qav1j/reservations")
    }
  }, [])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      }
      if (userAuth) {
        setUser(user)
      } else {
        setUser("none")
      }
    })
    return () => unsubscribe()
  }, [])

  if (!user) return null

  return (
    <Layout
      showFooter={false}
      showHeader={false}
      seo={{
        title: "Banh Mi - Reporte de reservaciones",
        metaRobotsNoindex: "noindex",
        metaRobotsNofollow: "nofollow",
      }}
    >
      {user === "none" ? <Login /> : <ReservationsReporter />}
    </Layout>
  )
}

export default ReservacionesReporte
