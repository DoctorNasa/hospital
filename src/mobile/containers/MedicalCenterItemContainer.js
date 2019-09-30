import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../"
import MedicalCenterItem from "../components/MedicalCenterItem"

const MedicalCenterItemContainer = props => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 3)
    }
  }, [_actionRedux, active])

  return <MedicalCenterItem {...props} />
}

export default MedicalCenterItemContainer
