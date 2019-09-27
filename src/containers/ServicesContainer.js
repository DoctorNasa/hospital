import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../"
import Services from "../components/Services"

const ServicesContainer = () => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 1)
    }
  }, [active, _actionRedux])

  return <Services />
}

export default ServicesContainer
