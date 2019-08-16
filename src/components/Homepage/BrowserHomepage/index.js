import React from "react"
import Grid from "@material-ui/core/Grid"
import CardsCarousel from "./CardsCarousel"
import BannerCarousel from "./BannerCarousel"
import BannerMenu from "./BannerMenu"
import YoutubeCarousel from "./YoutubeCarousel"
import PackagesCarousel from "./PackagesCarousel"
import AnotherBlock from "./AnotherBlock"
import "./style.css"

const styles = {}

const BrowserHomepage = () => {
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
        </Grid>
      </div>
    </div>
  )
}

export default BrowserHomepage
