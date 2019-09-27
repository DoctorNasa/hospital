import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../"
import PackageItemMobile from "../components/PackageItemMobile"

const PackageItemMobileContainer = props => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 3)
    }
  }, [active, _actionRedux])
  return <PackageItemMobile {...props} />
}

export default PackageItemMobileContainer
