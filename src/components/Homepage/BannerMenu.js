import React, { useState } from "react"
import { isBrowser, isTablet } from "react-device-detect"
import Search from "@material-ui/icons/Search"
import Grid from "@material-ui/core/Grid"
import Fab from "@material-ui/core/Fab"
import Paper from "@material-ui/core/Paper"
import { Link } from "react-router-dom"

const styles = {
  containerBrowser: {
    position: "relative",
    marginTop: "-15vh",
    zIndex: 99
  },
  containerTablet: {
    position: "absolute",
    marginTop: 25,
    zIndex: 99
  },
  searchInput: {
    textDecoration: "none",
    outline: "none",
    border: "none",
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 20,
    width: 200,
    backgroundColor: "white"
  },
  imgIcon: {
    filter:
      "invert(40%) sepia(98%) saturate(6699%) hue-rotate(163deg) brightness(95%) contrast(102%)",
    width: "70%"
  },
  ImgIconTxt: {
    fontSize: 15,
    marginTop: 10,
    color: "#00826a"
  },
  fab: {
    backgroundColor: "white",
    width: "80px",
    height: "80px",
    position: "relative",
    textTransform: "capitalize"
  },
  hoverPaper: {
    position: "absolute",
    width: 150,
    left: 87,
    top: -7,
    zIndex: 95
  },
  triangle: {
    width: 10,
    height: 0,
    borderStyle: "solid",
    borderWidth: "15px 20px 15px 0",
    left: -30,
    top: "calc(50% - 15px)",
    borderColor: "transparent white transparent transparent",
    position: "absolute",
    zIndex: 90
  },
  itemInHover: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 5,
    paddingTop: 5,
    fontSize: 13,
    textAlign: "start"
  },
  nostyle: {
    textDecoration: "none",
    color: "black",
    fontWeight: 400
  }
}

const BannerMenu = () => {
  const [menuActive, setMenuActive] = useState(null)
  return (
    <Grid item md={8} sm={12}>
      <div
        style={
          isBrowser
            ? styles.containerBrowser
            : isTablet && styles.containerTablet
        }
      >
        <Grid container spacing={2} style={{}}>
          <Grid item md={4} sm={12} style={{ textAlign: "center" }}>
            <div
              style={{
                marginBottom: 10,
                color: "#00826a",
                fontSize: 22,
                marginRight: 20
              }}
            >
              ใส่คำค้นหาที่คุณต้องการ
            </div>
            <div className="searchContainer">
              <input style={styles.searchInput} />
              <div className="bannerMenuSearch">
                <Search className="bannerMenuIcon" />
              </div>
            </div>
          </Grid>
          <Grid item md={8} sm={12}>
            <Grid container spacing={2}>
              <Grid item md={3} sm={6} style={{ textAlign: "center" }}>
                <Fab
                  style={styles.fab}
                  aria-label="add"
                  onMouseOver={() => setMenuActive(0)}
                  onMouseLeave={() => setMenuActive(null)}
                >
                  {menuActive === 0 && (
                    <Paper style={styles.hoverPaper}>
                      <div style={{ position: "relative" }}>
                        <Link to="/branch/phyathai1" style={styles.nostyle}>
                          <div className="itemInHover">phyathai 1</div>
                        </Link>
                        <Link to="/branch/phyathai2" style={styles.nostyle}>
                          <div className="itemInHover">phyathai 2</div>
                        </Link>
                        <Link to="/branch/phyathai3" style={styles.nostyle}>
                          <div className="itemInHover">phyathai 3</div>
                        </Link>
                        <div style={styles.triangle} />
                      </div>
                    </Paper>
                  )}
                  <img src="/images/iconLocation.png" style={styles.imgIcon} />
                </Fab>
                <div style={styles.ImgIconTxt}>เลือก โรงพยาบาล</div>
              </Grid>
              <Grid item md={3} sm={6} style={{ textAlign: "center" }}>
                <Fab
                  style={styles.fab}
                  aria-label="add"
                  onMouseOver={() => setMenuActive(1)}
                  onMouseLeave={() => setMenuActive(null)}
                >
                  {menuActive === 1 && (
                    <Paper style={styles.hoverPaper}>
                      <div style={{ position: "relative" }}>
                        <div className="itemInHover">phayathai 1</div>
                        <div className="itemInHover">phayathai 2</div>
                        <div className="itemInHover">phayathai ---- 3</div>
                        <div style={styles.triangle} />
                      </div>
                    </Paper>
                  )}

                  <img src="/images/iconBoxHeart.png" style={styles.imgIcon} />
                </Fab>
                <div style={styles.ImgIconTxt}>แพคเกจและ ชำระค่าบริการ</div>
              </Grid>
              <Grid item md={3} sm={6} style={{ textAlign: "center" }}>
                <Fab
                  style={styles.fab}
                  onMouseOver={() => setMenuActive(2)}
                  onMouseLeave={() => setMenuActive(null)}
                >
                  {menuActive === 2 && (
                    <Paper style={styles.hoverPaper}>
                      <div style={{ position: "relative" }}>
                        <div className="itemInHover">phayathai 1</div>
                        <div className="itemInHover">phayathai 2</div>
                        <div className="itemInHover">phayathai ---- 3</div>
                        <div style={styles.triangle} />
                      </div>
                    </Paper>
                  )}
                  <img
                    src="/images/iconMedicProfile.png"
                    style={styles.imgIcon}
                  />
                </Fab>
                <div style={styles.ImgIconTxt}>ค้นหาและ นัดหมายแพทย์</div>
              </Grid>
              <Grid item md={3} sm={6} style={{ textAlign: "center" }}>
                <Fab
                  style={styles.fab}
                  onMouseOver={() => setMenuActive(3)}
                  onMouseLeave={() => setMenuActive(null)}
                >
                  {menuActive === 3 && (
                    <Paper style={styles.hoverPaper}>
                      <div style={{ position: "relative" }}>
                        <div className="itemInHover">phayathai 1</div>
                        <div className="itemInHover">phayathai 2</div>
                        <div className="itemInHover">phayathai ---- 3</div>
                        <div style={styles.triangle} />
                      </div>
                    </Paper>
                  )}

                  <img src="/images/iconEarth.png" style={styles.imgIcon} />
                </Fab>
                <div style={styles.ImgIconTxt}>INTERNATIONAL PATIENTS</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Grid>
  )
}

export default BannerMenu
