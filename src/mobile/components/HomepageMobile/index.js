import React from "react"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"

const styles = {
  bannerMobile: {
    background: "url(/images/mobile-background-landingpage-top.jpg)",
    backgroundSize: "100%",
    height: 500
  }
}

const HomepageMobile = () => {
  return (
    <div style={styles.bannerMobile}>
      <Box display="flex" alignItems="center" flexDirection="column">
        <h1>หยุดทุกอาการป่วย ช่วยให้คุณไปต่อ</h1>
        <h2
          style={{
            color: "grey"
          }}
        >
          เริ่มเปลี่ยนตัวเองให้เป็นคนใหม่ ให้พญาไทยดูแลคุณ
        </h2>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{
            color: "white",
            fontSize: 20,
            marginTop: 15
          }}
        >
          ดูรายละเอียดเพิ่มเติม
        </Button>
      </Box>
    </div>
  )
}

export default HomepageMobile
