import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import SearchBar from "./SearchBar"
import SelectCountry from "./SelectCountry"
import Call from "./Call"
import "./style.css"

const titles = [
  {
    title: "Homepage",
    link: "/"
  },
  {
    title: "Hospital services",
    link: "/services"
  },
  {
    title: "Promotion packages",
    link: "/packages"
  },
  {
    title: "Health articles",
    link: "/articles"
  },
  {
    title: "About us",
    link: "/aboutus"
  }
]

const styles = {
  titleInactive: {
    color: "#00826a",
    fontWeight: 500,
    textAlign: "center",
    paddingBottom: 20,
    cursor: "pointer"
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
      style={{
        boxShadow: " 2px 2px 52px -40px rgba(0,0,0,0.27)",
        position: "sticky",
        zIndex: 90
      }}
    >
      <Grid item md={10} sm={12}>
        <Grid container justify="center">
          <Grid item md={3} sm={2}>
            <img
              style={{ width: "100%", maxWidth: 200, marginTop: 30 }}
              src="/images/logo.png"
            />
          </Grid>
          <Grid item md={9} sm={10}>
            <Grid
              container
              spacing={2}
              justify="flex-end"
              style={{ paddingTop: 20 }}
            >
              <Grid style={{ minWidth: 280 }}>
                <SearchBar />
              </Grid>
              <Grid item style={{ minWidth: 100 }}>
                <SelectCountry />
              </Grid>
              <Grid item style={{ width: 200 }}>
                <Call />
              </Grid>
              <Grid item xs="auto" xl={12}>
                <Grid container justify="center">
                  {titles.map(({ title, link }, index) => (
                    <Grid item xs={2} style={{ paddingTop: 8 }}>
                      <Link style={{ textDecoration: "none" }} to={link}>
                        <div
                          style={
                            index === pageContainer
                              ? styles.titleActive
                              : styles.titleInactive
                          }
                        >
                          {title}
                        </div>
                      </Link>
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
