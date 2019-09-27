import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../"
import AccommodationItemMobile from "../components/AccommodationsMobile/AccommodationItemMobile"

const AccommodationItemContainer = props => {
  const { _action, state } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _action("pageContainer", 3)
    }
  }, [active, _action])

  return <AccommodationItemMobile {...props} />
}

export default AccommodationItemContainer
