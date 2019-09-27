import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../"
import Homepage from "../components/Homepage"

const HomepageContainer = () => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 0)
    }
  }, [active, _actionRedux])

  return <Homepage />
}

export default HomepageContainer
