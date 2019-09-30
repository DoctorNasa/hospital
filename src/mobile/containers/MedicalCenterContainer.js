import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../"
import MedicalCenter from "../components/MedicalCenter"
import queryString from "query-string"

const MedicalCenterContainer = () => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 3)
    }
  }, [_actionRedux, active])

  return <MedicalCenter queries={queryString.parse(window.location.search)} />
}

export default MedicalCenterContainer
