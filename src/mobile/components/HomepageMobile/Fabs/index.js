import React, { useState } from "react"
import Fab from "@material-ui/core/Fab"
import Paper from "@material-ui/core/Paper"
import { Link } from "react-router-dom"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"

import "./style.css"

const styles = {
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
    top: -38,
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

const listFabs = [
  {
    title: "เลือก โรงพยาบาล",
    imgSrc: "/images/iconLocation.png"
  },
  {
    title: "แพคเกจและ ชำระค่าบริการ",
    imgSrc: "/images/iconBoxHeart.png"
  },
  {
    title: "ค้นหาและ นัดหมายแพทย์",
    imgSrc: "/images/iconMedicProfile.png"
  },
  {
    title: "INTERNATIONAL PATIENTS",
    imgSrc: "/images/iconEarth.png"
  }
]

const Fabs = () => {
  const [menuActive, setMenuActive] = useState(null)
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: 30
      }}
    >
      {listFabs.map(({ title, imgSrc }, index) => (
        <div style={{ flex: " 0 50%", textAlign: "center", paddingBottom: 30 }}>
          <Fab
            style={styles.fab}
            aria-label="add"
            onClick={() => setMenuActive(index)}
          >
            {menuActive === index && index === 0 && (
              <ClickAwayListener onClickAway={() => setMenuActive(null)}>
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
                    <Link to="/branch/พญาไทศรีราชา" style={styles.nostyle}>
                      <div className="itemInHover">พญาไท ศรีราชา</div>
                    </Link>
                    <Link to="/branch/พญาไทนวมินทร์" style={styles.nostyle}>
                      <div className="itemInHover">พญาไท นวมินทร์</div>
                    </Link>
                    <div style={styles.triangle} />
                  </div>
                </Paper>
              </ClickAwayListener>
            )}
            <img src={imgSrc} style={styles.imgIcon} />
          </Fab>
          <div style={styles.ImgIconTxt}>{title}</div>
        </div>
      ))}
    </div>
  )
}

export default Fabs
