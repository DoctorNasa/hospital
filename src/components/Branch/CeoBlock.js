import React from "react"
import Grid from "@material-ui/core/Grid"
import BtnBlue from "../BtnBlue"
import { deviceType } from "react-device-detect"

const styles = {
  container: {
    paddingTop: "30vh",
    position: "relative",
    paddingBottom: 70
  },
  bg1: {
    position: "absolute",
    maxHeight: "80vh",
    right: 0,
    bottom: 0,
    zIndex: -1
  },
  bg1Tablet: {
    position: "absolute",
    maxHeight: "60vh",
    right: 0,
    bottom: 0,
    zIndex: -1
  }
}

const CeoBlock = () => {
  return (
    <div style={styles.container}>
      <img
        src="/images/branch/branch-ceo.jpg"
        style={deviceType === "tablet" ? styles.bg1Tablet : styles.bg1}
      />
      <Grid container justify="center">
        <Grid item sm={8}>
          <Grid item sm={6}>
            <h3 className="titles">
              ผู้บริหารโรงพยาบาล และ คณะกรรมการ โรงพยาบาลพญาไท
            </h3>
            <div>
              <img
                style={{ width: 50 }}
                src="/images/branch/testimonial-start-blue.jpg"
              />
            </div>
            <Grid container justify="center">
              <Grid item sm={8} style={{ fontSize: 25 }}>
                เรามุ่งเน้นในเรื่องความเชี่ยวชาญ การแพทย์เฉพาะทาง
              </Grid>
            </Grid>
            <div style={{ width: "100%", textAlign: "end" }}>
              <img
                style={{ width: 50 }}
                src="/images/branch/testimonial-end-blue.png"
              />
            </div>
            <Grid container justify="center">
              <Grid item sm={8}>
                <div style={{ fontSize: 20, fontWeight: "bold" }}>
                  นาย อัฐ ทองแตง
                </div>
                <div style={{ fontSize: 15 }}>
                  ประธานเจ้าหน้าที่บริหาร เครือโรงพยาบาลพญาไท
                </div>
              </Grid>
            </Grid>
            <Grid item sm={8}></Grid>
            <div style={{ width: "100%", textAlign: "center" }}>
              <BtnBlue text="ดูทั้งหมด" marginTop={15} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default CeoBlock
