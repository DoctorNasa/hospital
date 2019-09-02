import React from "react"
import "./style.css"
import BannerCarousel from "./BannerCarousel"
import ZSearchBar from "../ZSearchBar"
import Fabs from "./Fabs"
import ZCardsCategoriesCarousel from "../ZCardsCategoriesCarousel"
import BtnBlue from "../BtnBlue"
import VideosCarousel from "./VideosCarousel"
import ZPackagesCarousel from "../ZPackagesCarousel"
import ZAnotherCarousel from "../ZAnotherCarousel"
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
        <ZSearchBar style={{ marginTop: 20, marginBottom: 20 }} />
        <Fabs />
      </div>
      <ZCardsCategoriesCarousel />
      <BtnBlue text="ดูทั้งหมด" textAlign="center" />
      <VideosCarousel />
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
