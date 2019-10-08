import React, { useEffect, useState, useRef } from "react"
import Grid from "@material-ui/core/Grid"
import TitleDiv from "../TitleDiv"
import PackageItem from "./PackageItem"
import WhiteRectangle from "./WhiteRectangle"
import Conditions from "./Conditions"
import WhiteBanner from "./WhiteBanner"
import Cart from "./Cart"

const styles = {
  banner: {
    background: "url(/images/bannerItemPackage.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: 350
  }
}

const items = new Array(20).fill(1)

const Packages = ({ queries }) => {
  return (
    <div>
      <div style={styles.banner} />
      <WhiteBanner />
      <Grid
        container
        justify="center"
        style={{ paddingTop: 30, paddingBottom: 50, background: "#f3f3f3" }}
      >
        <Grid item md={9} sm={12}>
          <Grid container>
            <Grid item sm={7} style={{ background: "" }}>
              <PackageItem />
              <WhiteRectangle />
              <div
                style={{ textAlign: "end", marginTop: 30, marginBottom: 50 }}
              >
                หมายเหตุ : ภายใต้เงื่อนไขที่โรงพยาบาลกำหนด
              </div>
              <Conditions />
            </Grid>
            <Grid item sm={5}>
              <Cart />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Packages
