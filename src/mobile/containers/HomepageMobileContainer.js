import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../"
import HomepageMobile from "../components/HomepageMobile"

const NavBarMobileContainer = () => {
  const { _pageContainer, pageContainer } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _pageContainer(0)
    }
  }, [_pageContainer, active])

  return <HomepageMobile />
}

export default NavBarMobileContainer
