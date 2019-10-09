import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../"
import International from "../components/International"
import queryString from "query-string"

const InternationalContainer = () => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 3)
      console.log(queryString.parse(window.location.search))
    }
  }, [_actionRedux, active])

  return <International queries={queryString.parse(window.location.search)} />
}

export default InternationalContainer
