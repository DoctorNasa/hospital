import React from "react"

const styles = {
  container: {
    margin: "15px 0px 15px 0px",
    boxShadow: "0px 0px 5px -1px rgba(48,191,197,0.6)",
    display: "flex",
    alignItems: "center",
    color: "#32bfc6",
    fontWeight: 500
  }
}

const BtnBlueShadow = ({ text, icon }) => {
  return (
    <div style={styles.container}>
      <img src={icon} width={60} />
      <div style={{ padding: "0px 30px 0px 30px" }}>{text}</div>
    </div>
  )
}

export default BtnBlueShadow
