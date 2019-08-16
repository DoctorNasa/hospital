import React from "react"
import Grid from "@material-ui/core/Grid"
import { isBrowser, isMobile, isTablet } from "react-device-detect"
import BrowserNavBar from "./BrowserNavBar"
import MobileNavBar from "./MobileNavBar"

const NavBar = () => {
  if (isBrowser) {
    return <BrowserNavBar />
  }
  if (isTablet) {
    return <BrowserNavBar />
  }
  if (isMobile) {
    return <MobileNavBar />
  }
}

export default NavBar
