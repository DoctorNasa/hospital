import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../"
import About from "../components/About"

const AboutContainer = () => {
  const { _pageContainer, pageContainer } = useContext(GlobalContext)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (active) {
      setActive(false)
      _pageContainer(4)
    }
  }, [active, _pageContainer])

  return <About />
}

export default AboutContainer
