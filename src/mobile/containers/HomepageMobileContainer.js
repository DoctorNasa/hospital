import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../"
import HomepageMobile from "../components/HomepageMobile"

const NavBarMobileContainer = () => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 0)
    }
  }, [_actionRedux, active])

  return <HomepageMobile />
}

export default NavBarMobileContainer
