import React, { useContext } from "react"
import { GlobalContext } from "../../"
import NavBarMobile from "../components/NavBarMobile"

const NavBarMobileContainer = () => {
  const { stateRedux } = useContext(GlobalContext)
  return <NavBarMobile stateRedux={stateRedux} />
}

export default NavBarMobileContainer
