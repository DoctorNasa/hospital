import React, { useContext } from "react"
import { GlobalContext } from "../../"
import NavBarMobile from "../components/NavBarMobile"

const NavBarMobileContainer = () => {
  const { pageContainer } = useContext(GlobalContext)
  return <NavBarMobile pageContainer={pageContainer} />
}

export default NavBarMobileContainer
