import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../"
import About from "../components/About"

const AboutContainer = () => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 4)
    }
  }, [active, _actionRedux])

  return <About />
}

export default AboutContainer
