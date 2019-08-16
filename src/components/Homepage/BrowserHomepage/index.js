import React from "react"
import Grid from "@material-ui/core/Grid"

import BannerCarousel from "./BannerCarousel"
import BannerMenu from "./BannerMenu"
import "./style.css"

const styles = {}

const BrowserHomepage = () => {
  return (
    <div>
      <BannerCarousel />
      <Grid container justify="center">
        <Grid item md={8} sm={12}>
          <Grid container spacing={2}>
            <Grid item>
              <BannerMenu />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default BrowserHomepage
