import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../"
import PackageItemMobile from "../components/PackageItemMobile"

const PackageItemMobileContainer = props => {
  const { _pageContainer, pageContainer } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _pageContainer(3)
    }
  }, [active, _pageContainer])
  return <PackageItemMobile {...props} />
}

export default PackageItemMobileContainer
