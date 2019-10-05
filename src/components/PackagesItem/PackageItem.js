import React from "react"
import BtnBlue from "../BtnBlue"

const styles = {
  container: {
    height: 300,
    flex: 1,
    marginLeft: 7,
    marginRight: 7,
    boxShadow: "0px 2px 5px 0px rgba(184,182,184,1)",
    borderRadius: 5
  }
}

const PackageItem = ({ img, text }) => {
  return (
    <div style={styles.container}>
      <img
        style={{
          width: "100%",
          height: 140,
          borderRadius: "5px 5px 0px 0px"
        }}
        src={img}
      />
      <div
        style={{
          color: "#4d4d4d",
          fontWeight: "bold",
          fontSize: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 80,
          marginLeft: 10,
          marginRight: 10,
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
