import React from "react"
import { isBrowser, isTablet } from "react-device-detect"
import Search from "@material-ui/icons/Search"
import Grid from "@material-ui/core/Grid"
import Fab from "@material-ui/core/Fab"

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
    height: "80px"
  }
}

const BannerMenu = () => {
  return (
    <div
      style={
        isBrowser ? styles.containerBrowser : isTablet && styles.containerTablet
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
              <Fab style={styles.fab} aria-label="add">
                <img src="/images/iconLocation.png" style={styles.imgIcon} />
              </Fab>
              <div style={styles.ImgIconTxt}>เลือก โรงพยาบาล</div>
            </Grid>
            <Grid item md={3} sm={6} style={{ textAlign: "center" }}>
              <Fab style={styles.fab} aria-label="add">
                <img src="/images/iconBoxHeart.png" style={styles.imgIcon} />
              </Fab>
              <div style={styles.ImgIconTxt}>แพคเกจและ ชำระค่าบริการ</div>
            </Grid>
            <Grid item md={3} sm={6} style={{ textAlign: "center" }}>
              <Fab style={styles.fab} aria-label="add">
                <img
                  src="/images/iconMedicProfile.png"
                  style={styles.imgIcon}
                />
              </Fab>
              <div style={styles.ImgIconTxt}>ค้นหาและ นัดหมายแพทย์</div>
            </Grid>
            <Grid item md={3} sm={6} style={{ textAlign: "center" }}>
              <Fab style={styles.fab} aria-label="add">
                <img src="/images/iconEarth.png" style={styles.imgIcon} />
              </Fab>
              <div style={styles.ImgIconTxt}>INTERNATIONAL PATIENTS</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default BannerMenu
