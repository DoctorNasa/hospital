import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../"
import AccommodationsMobile from "../components/AccommodationsMobile"

const AccommodationsContainer = props => {
  const { _action, state } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _action("pageContainer", 3)
    }
  }, [active, _action])

  return <AccommodationsMobile {...props} />
}

export default AccommodationsContainer
