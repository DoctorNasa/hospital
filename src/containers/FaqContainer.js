import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../"
import Faq from "../components/Faq"

const FaqContainer = () => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 4)
    }
  }, [active, _actionRedux])

  return <Faq />
}

export default FaqContainer
