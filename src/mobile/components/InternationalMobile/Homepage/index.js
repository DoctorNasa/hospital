import React, { useEffect } from "react"
import BannerCarousel from "./BannerCarousel"
import ZSearchBar from "../../ZSearchBar"
import Fabs from "../../HomepageMobile/Fabs"
import TitlePackageMain from "../../Titles/TitlePackageMain"
import RedRectangle from "./RedRectangle"
import BtnBlueShadow from "./BtnBlueShadow"

const styles = {
  margins: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "white",
    position: "relative",
    marginTop: "-20px"
  }
}

const HomepageMobile = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <BannerCarousel />
      <div style={styles.margins}>
        <ZSearchBar style={{ marginTop: 20, marginBottom: 20 }} />
        <Fabs />
        <div style={{ textAlign: "center", margin: "15px 0px 30px 0px" }}>
          <TitlePackageMain text="Pyathai International Service" />
        </div>
        <RedRectangle />
      </div>
      <img
        style={{ margin: "30px 0px 30px 0px", width: "100%" }}
        src="/images/mobile/internation-bg1.jpg"
      />
      <TitlePackageMain
        padding="15px 15px 15px 15px"
        text="Our corporate partners"
      />
      <BtnBlueShadow
        icon="/images/icons/inter1.png"
        text="List of Corporate Representative"
      />
      <BtnBlueShadow
        icon="/images/icons/inter2.png"
        text="List of corporate partners"
      />

      <img
        style={{ margin: "30px 0px 30px 0px", width: "100%" }}
        src="/images/mobile/internation-bg2.jpg"
      />
      <TitlePackageMain padding="15px 15px 15px 15px" text="Health Insurance" />
      <BtnBlueShadow icon="/images/icons/inter3.png" text="Insurance list" />
      <BtnBlueShadow
        icon="/images/icons/inter4.png"
        text="Insurance Guidance"
      />
      <img
        style={{ margin: "30px 0px 0px 0px", width: "100%" }}
        src="/images/mobile/internation-bg3.jpg"
      />
    </div>
  )
}

export default HomepageMobile
