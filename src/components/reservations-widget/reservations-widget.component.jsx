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
  getWhatsappTemplateMsg,
  isBrowser,
  sendNewReservationSMS,
  sendWhatsappMsg,
  whatsappTemplates,
} from "../../utils"
import Spinner from "../spinner/spinner.component"
import { navigate } from "gatsby-link"
import moment from "moment"
import { auth } from "../../services/firebase"
import { sendGtagReservationMadeEvent } from "../../gtag-utils"
import addToMailchimp from "gatsby-plugin-mailchimp"

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
  const [overviewText, setOverviewText] = useState("")
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

    const reservationRes = await setReservation(
      {
        ...formattedData,
      },
      "web"
    )

    if (reservationRes && reservationRes.error) {
      console.log("reservation error:", reservationRes.error)
      setIsLoading(false)
      alert("Hubo un error creando tu reservación. Por favor intenta de nuevo")
      return
    }

    // await sendNewReservationSMS({
    //   ...formattedData,
    //   date: `${moment(data.date, "YYYY/MM/DD").format("DD/MM/YYYY")} a las ${
    //     data.time
    //   }`,
    // })

    await sendWhatsappMsg(
      getWhatsappTemplateMsg(whatsappTemplates.RESERVATION_NEW, {
        ...formattedData,
        date: `${moment(data.date, "YYYY/MM/DD").format("DD/MM/YYYY")} a las ${
          data.time
        }`,
      }),
      "0997702994"
    )

    await addToMailchimp(data.email, {
      EMAIL: data.email,
      NAME: data.name,
      LAST_NAME: data.last_name,
      PHONE: data.phone,
    })

    sendGtagReservationMadeEvent()

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
    const currentTime = moment()
    const minTime = moment("11:30", "H:mm")
    const maxTime = moment("22:30", "H:mm")
    const isSunday = moment().day() === 0
    const isMonday = moment().day() === 1
    if (
      currentTime.isBefore(minTime) ||
      currentTime.isAfter(maxTime) ||
      isSunday ||
      isMonday
    ) {
      setOverviewText(
        "Hemos recibido tu solicitud de reservación. Recibirás la confirmación vía WhatsApp y correo electrónico durante nuestro horario de atención para reservaciones: Martes a Sábado de 11:30am a 10:30pm.  "
      )
    } else {
      setOverviewText(
        "Hemos recibido tu solicitud de reservación. En máximo 10 minutos recibirás un mensaje vía WhatsApp y un correo electrónico con la confirmación de tu reservación."
      )
    }
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
    if (isBrowser()) {
      window.scrollTo(0, 0)
    }
  }, [currentStep])

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
          disableEscapeKeyDown={true}
          onClose={() => setIsOpenDialog(false)}
          open={isOpenDialog}
        >
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} sm={6}>
              <S.ModalName>Hola {overviewData?.name}</S.ModalName>
              <S.ModalDescription>{overviewText}</S.ModalDescription>
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
