import React, { useEffect, useState } from "react"
import ReservationsReporter from "../components/reservations-reporter/reservations-reporter.component"
import { auth } from "../services/firebase"
import { navigate } from "gatsby"
import Login from "./login"

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

  return user ? <ReservationsReporter /> : <Login />
}

export default ReservacionesReporte
