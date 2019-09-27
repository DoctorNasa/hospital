import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../"
import PackagesMobile from "../components/PackagesMobile"
import queryString from "query-string"

const PackagesMobileContainer = () => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 3)
    }
    console.log(queryString.parse(window.location.search))
  }, [active, _actionRedux])

  return <PackagesMobile queries={queryString.parse(window.location.search)} />
}

export default PackagesMobileContainer
