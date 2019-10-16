import React from "react"
import Grid from "@material-ui/core/Grid"
import BannerCarousel from "./BannerCarousel"
import BannerMenu from "./BannerMenu"
import RedRectangle from "./RedRectangle"
import "../style.css"
import BtnBlueShadow from "./BtnBlueShadow"
import { Link } from "react-router-dom"

const styles = {
  h2: {
    color: "#4d4d4d",
    width: "100%",
    padding: "15px 0px 30px 0px"
  },
  noStyle: {
    textDecoration: "none",
    color: "black"
  }
}

const BrowserHomepage = () => {
  return (
    <div style={{ marginBottom: 50 }}>
      <BannerCarousel />
      <div style={{ marginTop: "40%" }}>
        <Grid container justify="center">
          <BannerMenu />
          <h2
            style={{
              color: "#4d4d4d",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              padding: "85px 0px 30px 0px"
            }}
          >
            Pyathai International Service
          </h2>
          <Grid item md={8} sm={6}>
            <div style={{ display: "flex" }}>
              <RedRectangle
                margin="15px 8px 15px 8px"
                backgroundColor="#f37a6f"
                icon="/images/icons/red-rectangle.png"
                title="International Marketing"
                text="Phyathai Hospital's International Marketing Department provides the marketing material supports to the facilitators."
              />
              <RedRectangle
                margin="15px 8px 15px 8px"
                backgroundColor="#fcb040"
                icon="/images/icons/red-rectangle2.png"
                title="International Relation Center"
                text="Our Phyathai Service Ambassador of International Relations Center (IRC) are proficient in a large number."
              />
              <RedRectangle
                margin="15px 8px 15px 8px"
                backgroundColor="#47a6dc"
                icon="/images/icons/red-rectangle3.png"
                title="International Medical Center"
                text="Internatioal Medical Center or IMC is set up to facilitate all aspects of
                hospital & medical care, ensuring
                the best quality."
              />
            </div>
          </Grid>
        </Grid>

        <div style={{ display: "flex" }}>
          <img
            style={{ width: "100%", flex: 2 }}
            src="/images/international-bg1.png"
          />
          <div style={{ flex: 3, display: "flex" }}>
            <div style={{ marginLeft: "10%" }}>
              <h2 style={styles.h2}>Our Corporate Partners</h2>
              <Link
                to="/international?corporaterepresentative=true"
                style={styles.noStyle}
              >
                <BtnBlueShadow
                  icon="/images/icons/inter1.png"
                  text="List of Corporate Representative"
                />
              </Link>
              <Link
                to="/international?corporatepartners=true"
                style={styles.noStyle}
              >
                <BtnBlueShadow
                  icon="/images/icons/inter2.png"
                  text="List of Corporate Partners"
                />
              </Link>
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 3, display: "flex", justifyContent: "flex-end" }}>
            <div style={{ marginRight: "10%" }}>
              <h2 style={styles.h2}>Our Corporate Partners</h2>
              <Link to="/international?insurances=true" style={styles.noStyle}>
                <BtnBlueShadow
                  icon="/images/icons/inter3.png"
                  text="Insurance list"
                />
              </Link>

              <Link
                to="/international?insuranceguidance=true"
                style={styles.noStyle}
              >
                <BtnBlueShadow
                  icon="/images/icons/inter4.png"
                  text="Insurance Guidance"
                />
              </Link>
            </div>
          </div>
          <img
            style={{ width: "100%", flex: 2 }}
            src="/images/international-bg2.png"
          />
        </div>
      </div>
    </div>
  )
}

export default BrowserHomepage
