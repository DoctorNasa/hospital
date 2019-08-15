import React, { useContext } from "react"
import { GlobalContext } from "../"
import NavBar from "../components/NavBar"

const NavbarContainer = () => {
  const { _pageContainer, pageContainer } = useContext(GlobalContext)
  return (
    <NavBar _pageContainer={_pageContainer} pageContainer={pageContainer} />
  )
}

export default NavbarContainer
