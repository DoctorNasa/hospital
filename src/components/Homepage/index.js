import React from "react"
import Grid from "@material-ui/core/Grid"
import { isBrowser, isMobile, isTablet } from "react-device-detect"
import Loadable from "react-loadable"

const Loading = () => <div style={{ height: "1000px" }} />

const BrowserHomepage = Loadable({
  loader: () => import("./BrowserHomepage"),
  loading: Loading
})

const MobileHomepage = Loadable({
  loader: () => import("./MobileHomepage"),
  loading: Loading
})


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
