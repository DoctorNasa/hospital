import React from "react"
import Grid from "@material-ui/core/Grid"
import DropDownBranch from "./DropDownBranch"

const BranchContent = ({ match }) => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          src="/images/branch/bg1.jpg"
          style={{
            position: "absolute",
            width: window.innerWidth / 2.5,
            right: 0,
            top: 40,
            zIndex: -1
          }}
        />
        <Grid container justify="center">
          <Grid item sm={8}>
            <Grid container>
              <Grid item sm={12} style={{ marginTop: 50 }}>
                <div
                  style={{ paddingTop: 20, paddingBottom: 20, fontWeight: 500 }}
                >
                  เลือกโรงพยาบาล
                </div>
                <DropDownBranch match={match} />
              </Grid>

              <Grid item sm={6} style={{ marginTop: 50 }}>
                <h3 className="titles">เกี่ยวกับเรา</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div style={{ position: "relative", marginTop: 200 }}>
        <img
          src="/images/branch/bg2.jpg"
          style={{
            position: "absolute",
            width: window.innerWidth / 2.5,
            left: 0,
            top: -150,
            zIndex: -1
          }}
        />
        <Grid container justify="center">
          <Grid item sm={8}>
            <Grid container justify="flex-end">
              <Grid item sm={6}>
                <h3 className="titles">วิสัยทัศน์และพันธกิจ</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default BranchContent
