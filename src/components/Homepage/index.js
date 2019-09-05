import React from "react"
import Grid from "@material-ui/core/Grid"
import ZCardsCategoriesCarousel from "../ZCardsCategoriesCarousel"
import BannerCarousel from "./BannerCarousel"
import BannerMenu from "./BannerMenu"
import YoutubeCarousel from "./YoutubeCarousel"
import PackagesCarousel from "../PackagesCarousel"
import AnotherCarousel from "../AnotherCarousel"
import FormBlock from "./FormBlock"
import TestimonialCarousel from "../TestimonialCarousel"
import "./style.css"

const BrowserHomepage = () => {
  return (
    <div>
      <BannerCarousel />
      <div style={{ marginTop: "40%" }}>
        <Grid container justify="center">
          <BannerMenu />
          <ZCardsCategoriesCarousel backgroundImg />
          <YoutubeCarousel />
          <ZCardsCategoriesCarousel />
          <PackagesCarousel />
          <img
            style={{ zIndex: 99, marginTop: 90, width: "100%" }}
            src="/images/banner-img-del.jpg"
          />
          <AnotherCarousel />
          <FormBlock />
          <TestimonialCarousel />
        </Grid>
      </div>
    </div>
  )
}

export default BrowserHomepage
