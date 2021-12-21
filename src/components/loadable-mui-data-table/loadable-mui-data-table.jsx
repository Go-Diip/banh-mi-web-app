import React from "react"
import Loadable from "@loadable/component"

const LoadableMuiDataTable = Loadable(() => import("mui-datatables"))

export default LoadableMuiDataTable
