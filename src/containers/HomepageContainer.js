import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../"
import Homepage from "../components/Homepage"

const HomepageContainer = () => {
  const { _pageContainer, pageContainer } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _pageContainer(0)
    }
  }, [active, _pageContainer])

  return <Homepage />
}

export default HomepageContainer
