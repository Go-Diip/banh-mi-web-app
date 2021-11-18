import React from "react"
import Loadable from "@loadable/component"

const LoadableModalVideo = Loadable(() => import("react-modal-video"))
export default LoadableModalVideo
