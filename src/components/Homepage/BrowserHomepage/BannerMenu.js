import React from "react"
import { isBrowser, isTablet } from "react-device-detect"

const styles = {
  containerBrowser: {
    position: "absolute",
    marginTop: "-5%",
    zIndex: 99
  },
  containerTablet: {
    position: "absolute",
    marginTop: 25,
    zIndex: 99
  }
}

const BannerMenu = () => {
  return (
    <div
      style={
        isBrowser ? styles.containerBrowser : isTablet && styles.containerTablet
      }
    >
      hi
    </div>
  )
}

export default BannerMenu
