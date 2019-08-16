import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../"
import Packages from "../components/Packages"

const PackagesContainer = () => {
  const { _pageContainer, pageContainer } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _pageContainer(2)
    }
  }, [active, _pageContainer])

  return <Packages />
}

export default PackagesContainer
