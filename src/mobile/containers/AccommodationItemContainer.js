import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../"
import AccommodationItemMobile from "../components/AccommodationsMobile/AccommodationItemMobile"

const AccommodationItemContainer = props => {
  const { _pageContainer, pageContainer } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _pageContainer(3)
    }
  }, [active, _pageContainer])

  return <AccommodationItemMobile {...props} />
}

export default AccommodationItemContainer
