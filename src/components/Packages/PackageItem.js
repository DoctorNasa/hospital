import React from "react"
import BtnBlue from "../BtnBlue"

const styles = {
  container: {
    height: 330,
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    boxShadow: "0px 8px 19px -7px rgba(186,186,186,1)"
  }
}

const PackageItem = ({ img, text }) => {
  return (
    <div style={styles.container}>
      <img style={{ width: "100%", height: 145 }} src={img} />
      <div
        style={{
          color: "#4d4d4d",
          fontWeight: "bold",
          fontSize: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 100,
          marginLeft: 20,
          marginRight: 20,
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
