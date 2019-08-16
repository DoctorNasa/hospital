import React from "react"
import Grid from "@material-ui/core/Grid"
const styles = {
  container: {
    height: 300,
    background: "#30bfc5",
    width: "100%",
    zIndex: 90,
    paddingTop: 50,
    paddingBottom: 50
  }
}

const AnotherBlock = () => {
  return (
    <Grid item md={12} sm={12} style={styles.container}>
      <Grid container justify="center" style={{ height: 250 }}>
        <Grid item md={8} sm={12}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src="/images/iconBannerBlue.png" style={{ flex: 1 }} />
            <div style={{ flex: 5, paddingLeft: 20 }}>
              <div style={{ fontSize: 20, fontWeight: 700 }}>
                ปรึกษาแพทย์ออนไลน์ เรายินดีให้คำปรึกษา
              </div>
              <div style={{ fontSize: 16 }}>
                เรายินดีให้คำปรึกษา โดยไม่เสียค่าใช้จ่าย
              </div>
            </div>
            <div style={{ flex: 5 }}>
              <div style={{ fontSize: 20, fontWeight: 700 }}>img woman?</div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div
        style={{
          backgroundImage: `url(/images/anotherblockPic.jpg)`,
          backgroundSize: "50% 400px",
          backgroundRepeat: "no-repeat",
          height: 400
        }}
      />
    </Grid>
  )
}

export default AnotherBlock
