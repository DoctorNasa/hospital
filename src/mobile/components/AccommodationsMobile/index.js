import React from "react"
import TitlePackageMain from "../Titles/TitlePackageMain"
import ZSelect from "../ZSelect"

const styles = {
  container: {
    paddingTop: 80
  },
  margins: {
    marginRight: 15,
    marginLeft: 15
  }
}

const AccomodationsMobile = () => {
  return (
    <div style={styles.container}>
      <div>
        <img
          src="/images/mobile/accommodation-banner.jpg"
          style={{ width: "100%" }}
        />
      </div>
      <div style={styles.margins}>
        <div
          style={{
            paddingTop: 15,
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div style={{ flex: 1 }}>
            <TitlePackageMain text="เลือกโรงพยาบาล" />
          </div>
          <div style={{ flex: 1 }}>
            <TitlePackageMain text="เลือกโรงพยาบาล" />
          </div>
        </div>

        <ZSelect placeholder="พญาไท 1" marginTop={15} marginBottom={15} />
        <div>fjdf</div>
        <div>fjdf</div>
      </div>
    </div>
  )
}

export default AccomodationsMobile
