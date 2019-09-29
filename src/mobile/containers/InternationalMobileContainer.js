import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../"
import InternationalMobile from "../components/InternationalMobile"
import queryString from "query-string"

const NavBarMobileContainer = () => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 0)
      console.log(queryString.parse(window.location.search))
    }
  }, [_actionRedux, active])

  return (
    <InternationalMobile queries={queryString.parse(window.location.search)} />
  )
}

export default NavBarMobileContainer
