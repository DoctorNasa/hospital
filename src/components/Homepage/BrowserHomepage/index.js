import React from "react"
import Grid from "@material-ui/core/Grid"
import CardsCarousel from "./CardsCarousel"
import BannerCarousel from "./BannerCarousel"
import BannerMenu from "./BannerMenu"
import VideoPlayer from "./VideoPlayer"
import "./style.css"

const styles = {}

const BrowserHomepage = () => {
  return (
    <div>
      <BannerCarousel />
      <div style={{ marginTop: "35vw" }}>
        <Grid container justify="center">
          <Grid item md={8} sm={12}>
            <BannerMenu />
            <CardsCarousel />
            <div>lol</div>
            <div>lol</div>
            <div>lol</div>
            <div>lol</div>
            <VideoPlayer />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default BrowserHomepage
