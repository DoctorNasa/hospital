import React from "react"
import "./style.css"
import BannerCarousel from "./BannerCarousel"
import SearchBar from "./SearchBar"
import Fabs from "./Fabs"
import CardsCarousel from "./CardsCarousel"

const HomepageMobile = () => {
  return (
    <div>
      <BannerCarousel />
      <div style={{ marginLeft: 15, marginRight: 15, textAlign: "center" }}>
        <SearchBar style={{ marginTop: 20 }} />
        <Fabs />
      </div>
      <CardsCarousel />
    </div>
  )
}

export default HomepageMobile
