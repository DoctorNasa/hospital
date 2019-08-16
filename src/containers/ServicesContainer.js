import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../"
import Services from "../components/Services"

const ServicesContainer = () => {
  const { _pageContainer, pageContainer } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _pageContainer(1)
    }
  }, [active, _pageContainer])

  return <Services />
}

export default ServicesContainer
