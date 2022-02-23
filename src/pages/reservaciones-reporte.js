import React, { useEffect, useState } from "react"
import ReservationsReporter from "../components/reservations-reporter/reservations-reporter.component"
import { auth } from "../services/firebase"
import Layout from "../components/layout"
import Login from "../components/login/login.component"

const ReservacionesReporte = () => {
  const [user, setUser] = useState(null)
  const [isReady, setIsReady] = useState(false)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      }
      if (userAuth) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
    setIsReady(true)
    return unsubscribe
  }, [])

  if (!isReady) return null

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
      {user ? <ReservationsReporter /> : <Login />}
    </Layout>
  )
}

export default ReservacionesReporte
