import React from "react"

const styles = {
  container: {
    background: "rgb(239, 249, 250)",
    display: "flex",
    justifyContent: "space-between",
    height: 50,
    marginBottom: 15
  },
  insideBlue: {
    color: "#30bfc5",
    marginRight: 30,
    fontSize: 20,
    fontWeight: 500
  }
}

const BlueTitle = ({ total }) => {
  return (
    <div style={styles.container}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ marginLeft: 30, marginRight: 30, height: 25 }}
          src="/images/icons/paperBlue.jpg"
        />{" "}
        <p style={styles.insideBlue}>ผลการค้นหา</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={styles.insideBlue}>{total + "  รายการ"}</p>
      </div>
    </div>
  )
}

export default BlueTitle
