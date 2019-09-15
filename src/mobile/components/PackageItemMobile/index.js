import React, { useEffect } from "react"
import BreadCrumb from "../BreadCrumb"
import DescriptionTop from "./DescriptionTop"
import PackageItem from "./PackageItem"
import WhiteRectangle from "./WhiteRectangle"
import Conditions from "./Conditions"
import GrayRectangle from "./GrayRectangle"
import ItemPackage from "../PackagesMobile/ItemPackage"
import ZVideosCarousel from "../ZVideosCarousel"

const styles = {
  container: {
    paddingTop: 100
  },
  underDescription: {
    padding: "15px 15px 30px 15px",
    backgroundColor: "#f3f3f3"
  }
}

const PackageItemMobile = ({ match }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div style={styles.container}>
      <div
        style={{
          marginLeft: 15,
          marginRight: 15,
          paddingTop: 15,
          paddingBottom: 30
        }}
      >
        <BreadCrumb
          crumbs={[
            { name: "หน้าหลัก", link: "/" },
            { name: "แพ็คเกจโปรโมชั่น", link: "/articles" },
            { name: "ศูนย์หัวใจ", link: "/articles" }
          ]}
        />
      </div>

      <img src="/images/mobile/banner-mobile.jpg" style={{ width: "100%" }} />
      <DescriptionTop />
      <div style={styles.underDescription}>
        <PackageItem />
        <WhiteRectangle />
        <div style={{ marginTop: 15 }}>
          หมายเหตุ : ภายใต้เงื่อนไขที่โรงพยาบาลกำหนด
        </div>
        <Conditions />
        <GrayRectangle />
      </div>
      <div style={{ margin: 15 }}>
        <ItemPackage
          imgPath={`/images/mobile/package-item.jpg`}
          title={`title`}
          subtitle={`subtitle`}
          marginTop={15}
          link={"/packages/item/id1"}
        />
        <ItemPackage
          imgPath={`/images/mobile/package-item.jpg`}
          title={`title`}
          subtitle={`subtitle`}
          marginTop={15}
          link={"/packages/item/id1"}
        />
      </div>
      <ZVideosCarousel title={"บทความสำหรับคุณ"} />
    </div>
  )
}

export default PackageItemMobile
