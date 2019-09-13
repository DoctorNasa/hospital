import React from "react"
import BreadCrumb from "../BreadCrumb"
import TitlePackageMain from "../Titles/TitlePackageMain"
import TitlePackageCategory from "../Titles/TitlePackageCategory"

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
    backgroundColor: "#f3f3f3"
  }
}

const PackageItemMobile = ({ match }) => {
  return (
    <div style={styles.container}>
      <div
        style={{
          marginLeft: 15,
          marginRight: 15,
          paddingTop: 30,
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

      <img
        src="/images/mobile/banner-mobile.jpg"
        style={{ width: "100%", paddingTop: 15 }}
      />
      <div>
        <div style={styles.description}>
          <TitlePackageMain
            text="แพคเกจเหมาจ่าย หัตการหัวใจ"
            padding="0px 0px 10px 0px"
          />
          <div style={{ marginLeft: 15, marginRight: 15 }}>
            <TitlePackageCategory
              text="สาขา"
              img="/images/icons/package-desc-1.jpg"
            />
            <div style={{ marginLeft: 40, marginBottom: 10 }}>
              โรงพยาบาล พญาไท 1
            </div>
            <TitlePackageCategory
              text="ชนิดของโปรแกรม"
              img="/images/icons/package-desc-2.jpg"
            />
            <div style={{ marginLeft: 40, marginBottom: 10 }}>
              โปรแกรมการรักษารายครั้ง
            </div>
            <TitlePackageCategory
              text="ราคาเริ่มต้น"
              img="/images/icons/package-desc-3.jpg"
            />
            <div
              style={{
                marginLeft: 40,
                fontWeight: "bold",
                fontSize: 18,
                color: "#30bfc5"
              }}
            >
              39,000 - 121,000 บาท
            </div>
          </div>
          param id {match.params.id}
        </div>
        <div style={styles.underDescription}>fsdfdsf</div>
      </div>
    </div>
  )
}

export default PackageItemMobile
