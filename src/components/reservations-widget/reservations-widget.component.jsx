import React, { useState } from "react"
import * as S from "./reservations-widget.styles.jsx"
import WidgetHeader from "./widget-header/widget-header.component"
import { graphql, useStaticQuery } from "gatsby"
import { useForm, FormProvider } from "react-hook-form"
import { Tab } from "@mui/material"
import StepOne from "./step-one/step-one.component"
import StepTwo from "./step-two/step-two.component"
import StepThree from "./step-three/step-three.component"
import {
  getReservations,
  getReservations2,
  setReservation,
} from "../../services/reservations"

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
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  })

  const handleChange = (event, newValue) => {
    setCurrentStep(newValue)
  }

  const onSubmit = data => {
    console.log("submit data", data)
    setReservation({
      name: data.name,
      email: data.email,
      phone: data.phone,
      area: data.area,
      date: data.date,
      seats: parseInt(data.seats),
      notes: data.notes
    })
  }
  return (
    <FormProvider {...methods}>
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
      </S.Wrapper>
    </FormProvider>
  )
}
export default ReservationsWidget
