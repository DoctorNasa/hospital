import React, { useEffect } from "react"
import BreadCrumb from "../BreadCrumb"
import DescriptionTop from "./DescriptionTop"
import PackageItem from "./PackageItem"

const styles = {
  container: {
    paddingTop: 100
  },
  description: {
    backgroundColor: "white",
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 15,
    marginRight: 15
  },
  underDescription: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
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
      </div>
    </div>
  )
}

export default PackageItemMobile
