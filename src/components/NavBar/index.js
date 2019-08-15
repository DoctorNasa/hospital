import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import SearchBar from "./SearchBar"
import SelectCountry from "./SelectCountry"
import Call from "./Call"
import "./style.css"

const titles = [
  "Home page",
  "Hospital service",
  "Promotion package",
  "Health article",
  "About us"
]

const styles = {
  titleInactive: {
    color: "#00826a",
    fontWeight: 500,
    textAlign: "center",
    paddingBottom: 20
  },
  titleActive: {
    color: "#00826a",
    fontWeight: 700,
    borderBottom: "5px solid #00826a",
    textAlign: "center",
    paddingBottom: 20
  }
}

const NavBar = ({ _pageContainer, pageContainer }) => {
  return (
    <Grid
      container
      justify="center"
      style={{ boxShadow: " 2px 2px 52px -40px rgba(0,0,0,0.27)" }}
    >
      <Grid item xs={11}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <img
              style={{ width: "100%" }}
              src="https://ww2.bangkokhospital.com/hearthospital/assets/images/corporate/phayathai_thai_english-01.jpg"
            />
          </Grid>
          <Grid item xs={9}>
            <Grid
              container
              spacing={2}
              justify="flex-end"
              style={{ paddingTop: 20 }}
            >
              <Grid item xs={3} style={{ minWidth: 280 }}>
                <SearchBar />
              </Grid>
              <Grid item style={{ minWidth: 100 }}>
                <SelectCountry />
              </Grid>
              <Grid item xs={2} style={{ width: 200 }}>
                <Call />
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="center">
                  {titles.map((x, index) => (
                    <Grid item xs={2} style={{ paddingTop: 8 }}>
                      <div
                        style={
                          index === pageContainer
                            ? styles.titleActive
                            : styles.titleInactive
                        }
                      >
                        {x}
                      </div>
                    </Grid>
                  ))}
                  <Grid item xs={2}>
                    <Button
                      style={{ zIndex: 1 }}
                      variant="contained"
                      color="secondary"
                      style={{ color: "white" }}
                    >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default NavBar
