import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../"
import AccommodationItem from "../components/Accommodations/AccommodationItem"

const AccommodationItemContainer = props => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 3)
    }
  }, [active, _actionRedux])

  return <AccommodationItem {...props} />
}

export default AccommodationItemContainer
