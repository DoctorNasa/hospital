import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../"
import Accommodations from "../components/Accommodations"

const AccommodationsContainer = props => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 3)
    }
  }, [active, _actionRedux])

  return <Accommodations {...props} />
}

export default AccommodationsContainer
