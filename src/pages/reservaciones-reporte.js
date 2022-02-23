import React, { useEffect, useState } from "react"
import ReservationsReporter from "../components/reservations-reporter/reservations-reporter.component"
import { auth } from "../services/firebase"
import { navigate } from "gatsby"
import IniciarSesion from "./iniciar-sesion"
import Layout from "../components/layout"

const ReservacionesReporte = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      }
      if (userAuth) {
        console.log("userAuth", userAuth)
        setUser(user)
      } else {
        setUser(null)
        navigate("/iniciar-sesion/")
      }
    })
    return unsubscribe
  }, [])

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
      {user ? <ReservationsReporter /> : <IniciarSesion />}
    </Layout>
  )
}

export default ReservacionesReporte
