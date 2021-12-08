import React from "react"
import MiscContent from "./layouts/MiscContent"
import ReservationGrid from "./layouts/ReservationGrid"

export const getPageLayout = layout => {
  const layoutName = layout?.fieldGroupName?.split("_").pop().trim()
  if (!layoutName) return null
  switch (layoutName) {
    case "MiscContent":
      return <MiscContent {...layout} />
    case "ReservationGrid":
      return <ReservationGrid {...layout} />
  }
}
