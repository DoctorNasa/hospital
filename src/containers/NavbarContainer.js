import React, { useContext } from "react"
import { GlobalContext } from "../"
import NavBar from "../components/NavBar"

const NavbarContainer = () => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  return <NavBar _actionRedux={_actionRedux} stateRedux={stateRedux} />
}

export default NavbarContainer
