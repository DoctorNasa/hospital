import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../"
import Faq from "../components/Faq"

const FaqContainer = () => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 3)
    }
  }, [_actionRedux, active])

  return <Faq />
}

export default FaqContainer
