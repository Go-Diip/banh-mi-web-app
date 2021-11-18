import React, { useState } from "react"

export const colorsContext = React.createContext()

const Provider = props => {
  const [savedColors, setSavedColors] = useState([])

  return (
    <colorsContext.Provider
      value={{
        savedColors,
        addColor: color =>
          setSavedColors(savedColors => [...savedColors, color]),
      }}
    >
      {props.children}
    </colorsContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
