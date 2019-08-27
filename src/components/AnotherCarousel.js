import React from "react"
import Grid from "@material-ui/core/Grid"
const styles = {
  container: {
    height: "100%",
    background: "#30bfc5",
    width: "100%",
    zIndex: 90
  }
}

const AnotherBlock = () => {
  return (
    <Grid item md={12} sm={12} style={styles.container}>
      <div
        style={{
          backgroundImage: `url(/images/anotherblockPic.jpg)`,
          backgroundSize: "50% 500px",
          backgroundRepeat: "no-repeat",
          height: 500,
          display: "flex",
          backgroundColor: "white"
        }}
      >
        <div style={{ flex: 1 }} />
        <div style={{ flex: 1, marginTop: 60, paddingLeft: 100 }}>
          <h3 style={{ fontSize: 25, fontWeight: 700 }}>ศูนย์ทางการแพทย์</h3>
          <h4 style={{ fontSize: 20, fontWeight: 500 }}>
            นวัตกรรมใหม่ 'Bi-h4lane DSA' <br /> รักษาหลอดเลือดสมองได้โดย
            ไม่ต้องผ่า
          </h4>
          <p>รังสีร่วมรักษาระบบหลอดเลือดลาตัว (Vascular Interventional Radio</p>
        </div>
      </div>
    </Grid>
  )
}

export default AnotherBlock
