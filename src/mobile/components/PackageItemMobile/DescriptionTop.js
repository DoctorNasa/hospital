import React from "react"
import TitlePackageMain from "../Titles/TitlePackageMain"
import TitlePackageCategory from "../Titles/TitlePackageCategory"

const styles = {
  container: {
    backgroundColor: "white",
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 15,
    marginRight: 15
  }
}

const DescriptionTop = ({}) => {
  return (
    <div style={styles.container}>
      <TitlePackageMain
        text="แพคเกจเหมาจ่าย หัตการหัวใจ"
        padding="0px 0px 10px 0px"
        color="#2b2b2b"
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
    </div>
  )
}

export default DescriptionTop
