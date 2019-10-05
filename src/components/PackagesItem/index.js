import React, { useEffect, useState, useRef } from "react"
import Pagination from "../Pagination"
import Grid from "@material-ui/core/Grid"
import "./styles.css"
import TitleDiv from "../TitleDiv"

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
      style={{ paddingTop: 30, marginBottom: 50 }}
    >
      <Grid item md={9} sm={12}>
        <Grid container>
          <Grid item sm={7} style={{ background: "" }}>
            <TitleDiv color="#007d68" text={"hi"} />
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
