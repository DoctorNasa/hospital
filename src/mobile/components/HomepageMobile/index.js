import React from "react"
import "./style.css"
import BannerCarousel from "./BannerCarousel"
import SearchBar from "./SearchBar"
import Fabs from "./Fabs"

const styles = {
  bannerMobile: {
    background: "url(/images/mobile-background-landingpage-top.jpg)",
    backgroundSize: "100% 80%",
    backgroundRepeat: "no-repeat",
    height: 600
  },
  containerMobile: {
    paddingTop: 100,
    marginRight: 5,
    marginLeft: 5
  }
}

const HomepageMobile = () => {
  return (
    <div>
      <BannerCarousel />
      <div style={{ marginLeft: 15, marginRight: 15, textAlign: "center" }}>
        <SearchBar style={{ marginTop: 20 }} />
        <Fabs />
      </div>
    </div>
  )
}

export default HomepageMobile
