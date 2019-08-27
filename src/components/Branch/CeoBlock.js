import React from "react"
import Grid from "@material-ui/core/Grid"

const styles = {
  container: {
    marginTop: 250,
    position: "relative"
  }
}

const CeoBlock = () => {
  return (
    <div style={styles.container}>
      <img
        src="/images/branch/branch-ceo.jpg"
        style={{
          position: "absolute",
          width: window.innerWidth / 2,
          top: -150,
          right: 0,
          zIndex: -1
        }}
      />
      <Grid container justify="center" style={{ height: 1000 }}>
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
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default CeoBlock
