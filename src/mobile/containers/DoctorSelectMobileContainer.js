import React, { useContext, useEffect, useState, useReducer } from "react"
import { GlobalContext } from "../../"
import DoctorSelectMobile from "../components/DoctorSelectMobile"
import queryString from "query-string"

const DoctorSelectMobileContainer = props => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 3)
    }
    console.log("reducer: ", stateRedux)
    console.log(queryString.parse(window.location.search))
  }, [active, _actionRedux, stateRedux])
  return (
    <>
      <DoctorSelectMobile
        stateRedux={stateRedux}
        _actionRedux={_actionRedux}
        queries={queryString.parse(window.location.search)}
        {...props}
      />
    </>
  )
}

export default DoctorSelectMobileContainer
