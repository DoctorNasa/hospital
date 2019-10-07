import React, { useEffect, useState, useRef } from "react"
import Grid from "@material-ui/core/Grid"
import TitleDiv from "../TitleDiv"
import PackageItem from "./PackageItem"
import WhiteRectangle from "./WhiteRectangle"
import Conditions from "./Conditions"

const styles = {
  container: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    overflow: "hidden"
  }
}

const items = new Array(20).fill(1)

const Packages = ({ queries }) => {
  return (
    <Grid
      container
      justify="center"
      style={{ paddingTop: 30, marginBottom: 50, background: "#f3f3f3" }}
    >
      <Grid item md={9} sm={12}>
        <Grid container spacing={4}>
          <Grid item sm={7} style={{ background: "" }}>
            <PackageItem />
            <WhiteRectangle />
            <div style={{ textAlign: "end", marginTop: 30, marginBottom: 50 }}>
              หมายเหตุ : ภายใต้เงื่อนไขที่โรงพยาบาลกำหนด
            </div>
            <Conditions />
          </Grid>
          <Grid item sm={5} style={{ background: "pink" }}>
            2
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Packages
