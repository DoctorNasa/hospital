import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../"
import Packages from "../components/Packages"

const PackagesContainer = () => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 2)
    }
  }, [active, _actionRedux])

  return <Packages />
}

export default PackagesContainer
