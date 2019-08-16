import React, { useContext } from "react"
import { GlobalContext } from "../../"
import { isBrowser, isMobile, isTablet } from "react-device-detect"
import BrowserNavBar from "./BrowserNavBar"
import MobileNavBar from "./MobileNavBar"

const NavBar = () => {
  const { _pageContainer, pageContainer } = useContext(GlobalContext)
  if (isBrowser) {
    return (
      <BrowserNavBar
        _pageContainer={_pageContainer}
        pageContainer={pageContainer}
      />
    )
  }
  if (isTablet) {
    return (
      <BrowserNavBar
        _pageContainer={_pageContainer}
        pageContainer={pageContainer}
      />
    )
  }
  if (isMobile) {
    return (
      <MobileNavBar
        _pageContainer={_pageContainer}
        pageContainer={pageContainer}
      />
    )
  }
}

export default NavBar
