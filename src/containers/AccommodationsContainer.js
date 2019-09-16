import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../"
import Accommodations from "../components/Accommodations"

const AccommodationsContainer = props => {
  const { _pageContainer, pageContainer } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _pageContainer(3)
    }
  }, [active, _pageContainer])

  return <Accommodations {...props} />
}

export default AccommodationsContainer
