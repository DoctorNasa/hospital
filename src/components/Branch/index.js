import React, { useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import BranchBannerCarousel from "./BranchBannerCarousel"

const Branch = ({ match }) => {
  useEffect(() => {
    console.log("hi", match.params.branch)
  })

  return (
    <>
      <BranchBannerCarousel match={match} />
      <div style={{ marginTop: "35vw" }}>
        <Grid container justify="center">
          hi
        </Grid>
      </div>
    </>
  )
}

export default Branch
