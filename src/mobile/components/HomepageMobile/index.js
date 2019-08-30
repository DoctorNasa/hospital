import React from "react"
import "./style.css"
import BannerCarousel from "./BannerCarousel"
import SearchBar from "./SearchBar"
import Fabs from "./Fabs"
import CardsCarousel from "./CardsCarousel"
import BtnBlue from "./BtnBlue"
import VideosCarousel from "./VideosCarousel"
import PackagesCarousel from "./PackagesCarousel"
import AnotherCarousel from "./AnotherCarousel"
import FormBlock from "./FormBlock"
import TestimonialCarousel from "../TestimonialCarousel"

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
      <div style={{ textAlign: "center", paddingBottom: 15 }}>
        <BtnBlue text="ดูทั้งหมด" />
      </div>
      <img
        src="images/mobile/homepage-mobile-another.jpg"
        style={{ width: "100%" }}
      />
      <AnotherCarousel />
      <div style={{ textAlign: "center", paddingBottom: 15 }}>
        <BtnBlue text="นย์ทางการแพทย์ทั้งหมด" />
      </div>
      <FormBlock />
      <TestimonialCarousel />
    </div>
  )
}

export default HomepageMobile
