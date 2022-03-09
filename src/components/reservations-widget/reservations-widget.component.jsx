import React, { useEffect, useState } from "react"
import * as S from "./reservations-widget.styles.jsx"
import WidgetHeader from "./widget-header/widget-header.component"
import { graphql, useStaticQuery } from "gatsby"
import { FormProvider, useForm } from "react-hook-form"
import { Grid, Tab } from "@mui/material"
import StepOne from "./step-one/step-one.component"
import StepTwo from "./step-two/step-two.component"
import StepThree from "./step-three/step-three.component"
import { setReservation } from "../../services/reservations"
import {
  getFormattedReservationData,
  sendNewReservationSMS,
  isBrowser,
} from "../../utils"
import Spinner from "../spinner/spinner.component"
import { navigate } from "gatsby-link"
import moment from "moment"
import firebase from "firebase/compat/app"
import { auth } from "../../services/firebase"

export const STEPS = {
  SELECT_TABLE: 0,
  PERSONAL_DATA: 1,
  FINALIZE: 2,
}

const ReservationsWidget = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      reservations: file(relativePath: { eq: "reservations.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)
  const [currentStep, setCurrentStep] = useState(STEPS.SELECT_TABLE)
  const [isLoading, setIsLoading] = useState(false)
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [overviewData, setOverviewData] = useState(null)
  const [shouldSubmit, setShouldSubmit] = useState(true)
  const [user, setUser] = useState(null)
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  })

  const handleChange = (event, newValue) => {
    setCurrentStep(newValue)
  }

  const onSubmit = async data => {
    if (!shouldSubmit) return
    setIsLoading(true)
    const formattedData = getFormattedReservationData(data)

    const reservationRes = await setReservation({
      ...formattedData,
    })

    if (reservationRes && reservationRes.error) {
      console.log("reservation error:", reservationRes.error)
      setIsLoading(false)
      alert("Hubo un error creando tu reservación. Por favor intenta de nuevo")
      return
    }
    await sendNewReservationSMS({
      ...formattedData,
      date: `${moment(data.date, "YYYY/MM/DD").format("DD/MM/YYYY")} a las ${
        data.time
      }`,
    })
    if (isBrowser() && window.gtag) {
      window.gtag("event", "form_submit", {
        event_category: "Forms",
        event_action: "Submit",
        event_label: "Reservation",
      })
    }
    setOverviewData({
      ...formattedData,
      date: `${data.date} a las ${data.time}`,
    })
    setIsLoading(false)
    // await Promise.all([
    //   setReservation({
    //     ...formattedData,
    //   }),
    //   // sendEmail(
    //   //   data.email,
    //   //   data.name,
    //   //   data.table,
    //   //   emailTypes.CUSTOMER_NOTIFICATION
    //   // ),
    //   sendEmail(data, emailTypes.CLIENT_NOTIFICATION),
    // ])
  }

  useEffect(() => {
    if (overviewData) {
      setIsOpenDialog(true)
      setShouldSubmit(false)
    }
  }, [overviewData])

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

  useEffect(() => {
    if (user === "none") {
      auth.signInAnonymously()
    }
  }, [user])

  return (
    <FormProvider {...methods}>
      {isLoading && <Spinner />}
      <S.Wrapper>
        <S.ImageWrapper tag="div" img={staticQuery.reservations} />
        <S.MainWrapper>
          <WidgetHeader />
          <S.StepperTabs
            value={currentStep}
            variant="fullWidth"
            onChange={handleChange}
            aria-label="Reservation "
          >
            <Tab
              label="1. Reserva una mesa"
              disabled={currentStep <= STEPS.SELECT_TABLE}
            />
            <Tab
              label="2. Datos Personales"
              disabled={currentStep <= STEPS.PERSONAL_DATA}
            />
            <Tab
              label="3. Finalizar"
              disabled={currentStep <= STEPS.FINALIZE}
            />
          </S.StepperTabs>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {currentStep === STEPS.SELECT_TABLE && (
              <StepOne setCurrentStep={setCurrentStep} />
            )}
            {currentStep === STEPS.PERSONAL_DATA && (
              <StepTwo setCurrentStep={setCurrentStep} />
            )}
            {currentStep === STEPS.FINALIZE && (
              <StepThree setCurrentStep={setCurrentStep} />
            )}
          </form>
        </S.MainWrapper>
        <S.CustomModal
          onClose={() => setIsOpenDialog(false)}
          open={isOpenDialog}
        >
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} sm={6}>
              <S.ModalName>Hola {overviewData?.name}</S.ModalName>
              <S.ModalDescription>
                Hemos recibido tu solicitud de reservación. En máximo 10 minutos
                recibirás un mensaje vía SMS y un correo electrónico con la
                confirmación de tu reservación.
              </S.ModalDescription>
            </Grid>
            <Grid item xs={12} sm={6}>
              <S.ModalLabel sx={{ marginBottom: "1em" }}>
                <b>Datos de Reservación</b>
              </S.ModalLabel>
              <S.ModalLabel>Nombre reserva</S.ModalLabel>
              <S.ModalText>{`${overviewData?.name} ${overviewData?.last_name}`}</S.ModalText>
              <S.ModalLabel>Fecha de reserva</S.ModalLabel>
              <S.ModalText>{overviewData?.date}</S.ModalText>
              <S.ModalLabel>Numero de personas</S.ModalLabel>
              <S.ModalText>{overviewData?.seats}</S.ModalText>
            </Grid>
          </Grid>
          <div>
            <S.ModalButton onClick={() => navigate("/")}>
              Entendido
            </S.ModalButton>
          </div>
        </S.CustomModal>
      </S.Wrapper>
    </FormProvider>
  )
}
export default ReservationsWidget
