import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../"
import PackagesItem from "../components/PackagesItem"

const PackagesItemContainer = () => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 2)
    }
  }, [active, _actionRedux])

  return <PackagesItem />
}

export default PackagesItemContainer
