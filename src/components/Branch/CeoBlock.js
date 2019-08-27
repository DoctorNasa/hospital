import React from "react"
import Grid from "@material-ui/core/Grid"
import BlueBtn from "../BlueBtn"

const styles = {
  container: {
    paddingTop: "30vh",
    position: "relative",
    paddingBottom: 70
  }
}

const CeoBlock = () => {
  return (
    <div style={styles.container}>
      <img
        src="/images/branch/branch-ceo.jpg"
        style={{
          position: "absolute",
          height: "80vh",
          right: 0,
          bottom: 0,
          zIndex: -1
        }}
      />
      <Grid container justify="center">
        <Grid item md={8}>
          <Grid item md={6}>
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
              <Grid item md={8} style={{ fontSize: 25 }}>
                เรามุ่งเน้นในเรื่องความเชี่ยวชาญ การแพทย์เฉพาะทาง
              </Grid>
            </Grid>
            <div style={{ width: "100%", textAlign: "end" }}>
              <img
                style={{ width: 50 }}
                src="/images/branch/testimonial-end-blue.jpg"
              />
            </div>
            <Grid container justify="center">
              <Grid item md={8}>
                <div style={{ fontSize: 20, fontWeight: "bold" }}>
                  นาย อัฐ ทองแตง
                </div>
                <div style={{ fontSize: 15 }}>
                  ประธานเจ้าหน้าที่บริหาร เครือโรงพยาบาลพญาไท
                </div>
              </Grid>
            </Grid>
            <Grid item md={8}></Grid>
            <div style={{ width: "100%", textAlign: "center", marginTop: 20 }}>
              <BlueBtn text="ดูทั้งหมด" />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default CeoBlock
