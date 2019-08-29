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
  btn: {
    marginLeft: 15,
    marginRight: 15,
    textAlign: "center"
  }
}

const HomepageMobile = () => {
  return (
    <div>
      <BannerCarousel />
      <div style={styles.btn}>
        <SearchBar style={{ marginTop: 20, marginBottom: 20 }} />
        <Fabs />
      </div>
      <CardsCarousel />
      <div style={styles.btn}>
        <BtnBlue text="ดูทั้งหมด" />
      </div>
      <VideosCarousel />
      <div style={styles.btn}>
        <BtnBlue text="ดูทั้งหมด" />
      </div>
      <CardsCarousel />
      <div style={styles.btn}>
        <BtnBlue text="ดูทั้งหมด" />
      </div>
      <PackagesCarousel />
      <img
        src="images/mobile/homepage-mobile-another.jpg"
        style={{ width: "100%" }}
      />
      <div style={styles.btn}>
        <BtnBlue text="ดูทั้งหมด" />
      </div>
    </div>
  )
}

export default HomepageMobile
