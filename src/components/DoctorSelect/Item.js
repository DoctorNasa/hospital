import React from "react"
import BtnBlue from "../BtnBlue"

const styles = {
  container: {
    height: 400,
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    textAlign: "center"
  }
}

const PackageItem = ({ img, text }) => {
  return (
    <div style={styles.container}>
      <img style={{ margin: 15 }} src={img} />
      <div style={{ color: "#00826a", fontSize: 20, fontWeight: "bold" }}>
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
          textAlign: "center"
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
