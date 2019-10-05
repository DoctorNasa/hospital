import React from "react"
import BtnBlue from "../BtnBlue"

const styles = {
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    textAlign: "center"
  }
}

const PackageItem = ({ img, text }) => {
  return (
    <div style={styles.container}>
      <img style={{ width: "100%", maxWidth: 150 }} src={img} />
      <div
        style={{
          color: "#00826a",
          fontSize: 20,
          fontWeight: "bold",
          paddingTop: 15
        }}
      >
        พญ.วริศรา รุทระวณิช
      </div>
      <div
        style={{
          color: "#4d4d4d",
          fontWeight: "bold",
          fontSize: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 20,
          textAlign: "center",
          height: 70
        }}
      >
        {text}
      </div>
      <div style={{ textAlign: "center", marginLeft: 20, marginRight: 20 }}>
        <BtnBlue text="ดูรายละเอียด" />
      </div>
    </div>
  )
}

export default PackageItem
