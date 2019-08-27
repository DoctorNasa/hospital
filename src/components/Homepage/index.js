import React from "react"
import Grid from "@material-ui/core/Grid"
import CardsCarousel from "./CardsCarousel"
import BannerCarousel from "./BannerCarousel"
import BannerMenu from "./BannerMenu"
import YoutubeCarousel from "./YoutubeCarousel"
import PackagesCarousel from "./PackagesCarousel"
import AnotherBlock from "./AnotherBlock"
import FormBlock from "./FormBlock"
import TestimonialCarousel from "./TestimonialCarousel"
import "./style.css"

const styles = {}

const BrowserHomepage = () => {
  React.useEffect(() => {
    // Update the document title using the browser API
    console.log("-")
  }, [])
  return (
    <div>
      <BannerCarousel />
      <div style={{ marginTop: "35vw" }}>
        <Grid container justify="center">
          <BannerMenu />
          <CardsCarousel backgroundImg />
          <YoutubeCarousel />
          <CardsCarousel />
          <PackagesCarousel />
          <AnotherBlock />
          <FormBlock />
          <TestimonialCarousel />
        </Grid>
      </div>
    </div>
  )
}

export default BrowserHomepage
