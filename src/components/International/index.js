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
import RedRectangle from "./RedRectangle"
import "./style.css"

const BrowserHomepage = () => {
  return (
    <div style={{ marginBottom: 50 }}>
      <BannerCarousel />
      <div style={{ marginTop: "40%" }}>
        <Grid container justify="center">
          <BannerMenu />
          <h2
            style={{
              color: "#4d4d4d",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              padding: "15px 0px 30px 0px"
            }}
          >
            Pyathai International Service
          </h2>
          <Grid item md={8} sm={6}>
            <div style={{ display: "flex" }}>
              <RedRectangle
                margin="15px 8px 15px 8px"
                backgroundColor="#f37a6f"
                icon="/images/icons/red-rectangle.png"
                title="International Marketing"
                text="Phyathai Hospital's International Marketing Department provides the marketing material supports to the facilitators."
              />
              <RedRectangle
                margin="15px 8px 15px 8px"
                backgroundColor="#fcb040"
                icon="/images/icons/red-rectangle2.png"
                title="International Relation Center"
                text="Our Phyathai Service Ambassador of International Relations Center (IRC) are proficient in a large number."
              />
              <RedRectangle
                margin="15px 8px 15px 8px"
                backgroundColor="#47a6dc"
                icon="/images/icons/red-rectangle3.png"
                title="International Medical Center"
                text="Internatioal Medical Center or IMC is set up to facilitate all aspects of
                hospital & medical care, ensuring
                the best quality."
              />
            </div>
          </Grid>
          <img src="/images/international-bg1.png" />
          <img src="/images/international-bg2.png" /> //TODO Picture
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
