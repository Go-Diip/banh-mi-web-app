import React from "react"
import MiscContent from "./layouts/MiscContent"
import ReservationGrid from "./layouts/ReservationGrid"
import AboutUsSection from "./layouts/AboutUsSection"
import Menu from "./layouts/Menu"
import Hero from "./layouts/Hero"
import FullMenu from "./layouts/FullMenu"
import PromoGrid from "./layouts/PromoGrid"

export const getPageLayout = layout => {
  const layoutName = layout?.fieldGroupName?.split("_").pop().trim()
  if (!layoutName) return null
  switch (layoutName) {
    case "MiscContent":
      return <MiscContent {...layout} />
    case "ReservationGrid":
      return <ReservationGrid {...layout} />
    case "AboutUsSection":
      return <AboutUsSection {...layout} />
    case "Menu":
      return <Menu {...layout} />
    case "Hero":
      return <Hero {...layout} />
    case "FullMenu":
      return <FullMenu {...layout} />
    case "PromoGrid":
      return <PromoGrid {...layout} />
  }
}
