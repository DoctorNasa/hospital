import React from "react"
import "./style.css"
import BannerCarousel from "./BannerCarousel"
import SearchBar from "./SearchBar"
import Fabs from "./Fabs"
import CardsCarousel from "./CardsCarousel"
import BtnBlue from "./BtnBlue"
import VideosCarousel from "./VideosCarousel"
import PackagesCarousel from "./PackagesCarousel"

const styles = {
  margins: {
    marginLeft: 15,
    marginRight: 15
  }
}

const HomepageMobile = () => {
  return (
    <div>
      <BannerCarousel />
      <div style={styles.margins}>
        <SearchBar style={{ marginTop: 20, marginBottom: 20 }} />
        <Fabs />
      </div>

      <div style={styles.margins}>
        <CardsCarousel />
        <div style={{ textAlign: "center" }}>
          <BtnBlue text="ดูทั้งหมด" />
        </div>

        <VideosCarousel />
        <div style={{ textAlign: "center" }}>
          <BtnBlue text="ดูทั้งหมด" />
        </div>
        <CardsCarousel />
        <div style={{ textAlign: "center" }}>
          <BtnBlue text="ดูทั้งหมด" />
        </div>
      </div>
      <PackagesCarousel />
      <img
        src="images/mobile/homepage-mobile-another.jpg"
        style={{ width: "100%" }}
      />
      <div style={{ textAlign: "center" }}>
        <BtnBlue text="ดูทั้งหมด" />
      </div>
    </div>
  )
}

export default HomepageMobile
