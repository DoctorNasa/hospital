import React from "react"
import Grid from "@material-ui/core/Grid"
import { isBrowser, isMobile, isTablet } from "react-device-detect"
import BrowserHomepage from "./BrowserHomepage"
import MobileHomepage from "./MobileHomepage"

const Homepage = () => {
  if (isBrowser) {
    return <BrowserHomepage />
  }
  if (isTablet) {
    return <BrowserHomepage />
  }
  if (isMobile) {
    return <MobileHomepage />
  }
}

export default Homepage
