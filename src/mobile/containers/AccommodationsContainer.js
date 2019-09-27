import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../"
import AccommodationsMobile from "../components/AccommodationsMobile"

const AccommodationsContainer = props => {
  const { _pageContainer, pageContainer } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _pageContainer(3)
    }
  }, [active, _pageContainer])

  return <AccommodationsMobile {...props} />
}

export default AccommodationsContainer
