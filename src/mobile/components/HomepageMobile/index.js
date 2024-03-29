import React, { useEffect } from "react"
import "./style.css"
import BannerCarousel from "./BannerCarousel"
import ZSearchBar from "../ZSearchBar"
import Fabs from "./Fabs"
import ZCardsCategoriesCarousel from "../ZCardsCategoriesCarousel"
import BtnBlue from "../BtnBlue"
import ZVideosCarousel from "../ZVideosCarousel"
import ZPackagesCarousel from "../ZPackagesCarousel"
import ZAnotherCarousel from "../ZAnotherCarousel"
import FormBlock from "./FormBlock"
import TestimonialCarousel from "../TestimonialCarousel"

const styles = {
  margins: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "white",
    position: "relative",
    marginTop: "-20px"
  }
}

const HomepageMobile = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <BannerCarousel />
      <div style={styles.margins}>
        <ZSearchBar style={{ marginTop: 20, marginBottom: 20 }} />
        <Fabs />
      </div>
      <ZCardsCategoriesCarousel />
      <BtnBlue text="ดูทั้งหมด" textAlign="center" />
      <ZVideosCarousel />
      <BtnBlue text="ดูทั้งหมด" textAlign="center" />
      <ZCardsCategoriesCarousel />
      <BtnBlue text="ดูทั้งหมด" textAlign="center" />
      <ZPackagesCarousel />
      <BtnBlue text="ดูทั้งหมด" textAlign="center" paddingBottom={15} />
      <img
        src="images/mobile/homepage-mobile-another.jpg"
        style={{ width: "100%" }}
      />
      <ZAnotherCarousel />
      <BtnBlue
        text="นย์ทางการแพทย์ทั้งหมด"
        textAlign="center"
        paddingBottom={15}
      />
      <FormBlock />
      <TestimonialCarousel />
    </div>
  )
}

export default HomepageMobile
