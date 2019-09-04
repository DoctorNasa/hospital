import React from "react"
import ZSelect from "../ZSelect"

const styles = {
  footer1: {
    background: "#f5f9f9",
    padding: 15,
    paddingTop: 30,
    paddingBottom: 30
  },
  footer2: {
    background: "#e3f4ec",
    padding: 15,
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: "center"
  },
  title: {
    color: "#00826a",
    fontWeight: "bold"
  }
}

const FooterMobile = () => {
  return (
    <div>
      <div style={styles.footer1}>
        <div style={styles.title}>ศูนย์ทางการแพทย์ทั้งหมด</div>
        <ZSelect marginTop={15} placeHolder="เลือกโรงพยาบาล" />
        <ZSelect marginTop={15} placeHolder="เลือกศูนย์ทางการแพทย์" />
      </div>
      <div style={styles.footer2}>
        <img src="/images/logo-mobile.png" style={{ width: 200 }} />
        <div
          style={{
            display: "flex",
            width: "100%",
            paddingTop: 30,
            paddingBottom: 30
          }}
        >
          <div style={{ margin: 5 }}>
            <img
              src="/images/mobile/footer/call.jpg"
              style={{ width: "100%", height: "95%" }}
            />
          </div>
          <div style={{ margin: 5 }}>
            <img
              src="/images/mobile/footer/footer-fb.png"
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ margin: 5 }}>
            <img
              src="/images/mobile/footer/footer-intouch.png"
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ margin: 5 }}>
            <img
              src="/images/mobile/footer/footer-line.png"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div
          style={{
            color: "#00826a",
            fontSize: 13,
            fontWeight: 500
          }}
        >
          Copyright © 2016 Phyathai Hospital. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default FooterMobile
