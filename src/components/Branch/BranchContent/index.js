import React from "react"
import Grid from "@material-ui/core/Grid"
import DropDownBranch from "./DropDownBranch"
import { deviceType } from "react-device-detect"

const styles = {
  bg1: {
    position: "absolute",
    height: "80vh",
    right: 0,
    top: "5vh",
    zIndex: -1
  },
  bg1Tablet: {
    position: "absolute",
    width: "50vw",
    right: 0,
    top: "5vh",
    zIndex: -1
  },
  bg2: {
    position: "absolute",
    height: "80vh",
    left: 0,
    zIndex: -1
  },
  bg2Tablet: {
    position: "absolute",
    left: 0,
    width: "50vw",
    zIndex: -1
  },
  section2: {
    position: "relative",
    marginTop: "35vh"
  },
  section2Tablet: {
    position: "relative"
  }
}

const BranchContent = ({ match, dnBranch }) => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          src="/images/branch/bg1.jpg"
          style={deviceType === "tablet" ? styles.bg1Tablet : styles.bg1}
        />
        <Grid container justify="center">
          <Grid item sm={8}>
            <Grid container>
              <Grid item sm={12} style={{ marginTop: "5vh" }}>
                <div
                  style={{ paddingTop: 20, paddingBottom: 20, fontWeight: 500 }}
                >
                  เลือกโรงพยาบาล
                </div>
                <DropDownBranch match={match} dnBranch={dnBranch} />
              </Grid>

              <Grid item sm={6} style={{ marginTop: "5vh" }}>
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
      <div style={{ position: "relative", marginTop: "15vh" }}>
        <img
          src="/images/branch/bg2.jpg"
          style={deviceType === "tablet" ? styles.bg2Tablet : styles.bg2}
        />
        <Grid container justify="center">
          <Grid item sm={8}>
            <Grid container justify="flex-end">
              <Grid item sm={6} style={{ paddingTop: "15vh" }}>
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
