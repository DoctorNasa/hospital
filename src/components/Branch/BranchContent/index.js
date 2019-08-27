import React from "react"
import Grid from "@material-ui/core/Grid"
import DropDownBranch from "./DropDownBranch"

const BranchContent = ({ match }) => {
  return (
    <div>
      <Grid container justify="center" style={{ position: "relative" }}>
        <img
          src="/images/branch/bg1.jpg"
          style={{
            position: "absolute",
            height: window.innerHeight / 1.5,
            right: 0
          }}
        />
        <Grid item sm={8}>
          <div>เลือกโรงพยาบาล</div>
          <DropDownBranch match={match} />
        </Grid>
      </Grid>
    </div>
  )
}

export default BranchContent
