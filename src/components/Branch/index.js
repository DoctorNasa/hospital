import React, { useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import BranchBannerCarousel from "./BranchBannerCarousel"
import BranchCarouselCard from "./BranchCarouselCard"
import BranchContent from "./BranchContent"

const Branch = ({ match }) => {
  useEffect(() => {
    console.log("hi", match.params.branch)
  })

  return (
    <>
      <BranchBannerCarousel match={match} />
      <div style={{ marginTop: "35vw" }}>
        <BranchCarouselCard />
        <BranchContent match={match} />
      </div>
    </>
  )
}

export default Branch
