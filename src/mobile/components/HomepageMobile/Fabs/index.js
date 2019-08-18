import React, { useState } from "react"
import Fab from "@material-ui/core/Fab"
import Paper from "@material-ui/core/Paper"

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
        marginTop: 20,
        marginBottom: 20
      }}
    >
      {listFabs.map(({ title, imgSrc }) => (
        <div style={{ flex: " 0 50%", textAlign: "center" }}>
          <Fab
            style={styles.fab}
            aria-label="add"
            onMouseOver={() => setMenuActive(0)}
            onMouseLeave={() => setMenuActive(null)}
          >
            {menuActive === 0 && (
              <Paper style={styles.hoverPaper}>
                <div style={{ position: "relative" }}>
                  <div
                    className="itemInHover"
                    onClick={() => console.log("roger")}
                  >
                    phayathai 1
                  </div>
                  <div className="itemInHover">phayathai 2</div>
                  <div className="itemInHover">phayathai ---- 3</div>
                  <div style={styles.triangle} />
                </div>
              </Paper>
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
