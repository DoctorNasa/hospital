import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../"
import AccommodationItemMobile from "../components/AccommodationsMobile/AccommodationItemMobile"

const AccommodationItemContainer = props => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 3)
    }
  }, [active, _actionRedux])

  return <AccommodationItemMobile {...props} />
}

export default AccommodationItemContainer
