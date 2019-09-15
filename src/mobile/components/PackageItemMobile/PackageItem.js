import React from "react"
import TitlePackageMain from "../Titles/TitlePackageMain"
import TitlePackageCategory from "../Titles/TitlePackageCategory"
import AddCircle from "@material-ui/icons/AddCircle"

const styles = {
  container: {
    backgroundColor: "white",
    padding: 15,
    paddingTop: 30,
    paddingBottom: 30,
    boxShadow: "0px 2px 6px -1px rgba(48,191,197,1)"
  },
  flexSection1: {
    display: "flex",
    justifyContent: "space-between"
  },
  flexSection2: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 30
  }
}

const PackageItem = ({}) => {
  return (
    <div style={styles.container}>
      <div style={styles.flexSection1}>
        <div
          style={{
            flex: 1
          }}
        >
          <div
            style={{
              flex: 1,
              color: "#2b2b2b",
              fontSize: 18,
              fontWeight: "bold"
            }}
          >
            การฉีดสีหลอดเลือด หัวใจ (CAG)
          </div>
          <div style={{ color: "#5f5f5f", fontWeight: "bold" }}>
            2 วัน 1 คืน
          </div>
        </div>

        <div
          style={{
            flex: 1,
            color: "#2b2b2b",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "end"
          }}
        >
          39,000 บาท
        </div>
      </div>
      <div style={styles.flexSection2}>
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <img style={{ width: 50 }} src="/images/icons/package-add-icon.png" />
          <div style={{ marginLeft: 15 }}>เพิ่มจำนวน</div>
        </div>
        <div style={{ flex: 1, textAlign: "end" }}>
          <AddCircle style={{ color: "red" }} />
        </div>
      </div>
    </div>
  )
}

export default PackageItem
