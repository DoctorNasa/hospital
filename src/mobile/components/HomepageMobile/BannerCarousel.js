import React from "react"
import BtnBlue from "../BtnBlue"

const styles = {
  bannerBg: {
    backgroundImage: 'url("/images/mobile/homepage-banner.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% calc((9/16)*200vw)",
    position: "sticky",
    top: 0,
    height: "calc((9/16)*185vw)",
    width: "100%"
  },
  containerMobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  subcontainerNormal: {
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 30,
    position: "relative",
    height: 280,
    width: "100%",
    backgroundColor: "white",
    paddingBottom: 10
  }
}
const BannerCarousel = () => {
  return (
    <div style={{ paddingBottom: 15, background: "white" }}>
      <div>
        <div style={styles.bannerBg} />
        <div style={styles.containerMobile}>
          <img
            src="/images/mobile/white-wave.png"
            style={{
              position: "absolute",
              width: "100%",
              top: "calc((9/16)*135vw)",
              zIndex: 0
            }}
          />
          <div style={styles.subcontainerNormal}>
            <div
              style={{
                position: "absolute",
                zIndex: 1,
                textAlign: "center"
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  color: "#4d4d4d",
                  margin: "0px 15px 0px 15px"
                }}
              >
                ครอบครัวมีความสุขหยุด ทุกอาการป่วยช่วยให้คุณไปต่อ
              </h1>
              <h2
                style={{
                  color: "grey",
                  textAlign: "center",
                  color: "#818385",
                  margin: "0px 15px 0px 15px"
                }}
              >
                เริ่มเปลี่ยนตัวเองให้เป็นคนใหม่ ให้พญาไทยดูแลคุณ
              </h2>
              <BtnBlue text="ดูรายละเอียดเพิ่มเติม" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerCarousel
