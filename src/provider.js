import React, { useEffect, useState } from "react"

export const ThemeContext = React.createContext()

const Provider = props => {
  const [hasLoadedOnce, setLoadedOnce] = useState(false)

  useEffect(() => {
    setLoadedOnce(true)
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        hasLoadedOnce,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
