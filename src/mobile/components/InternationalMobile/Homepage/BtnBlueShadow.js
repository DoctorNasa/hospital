import React from "react"

const styles = {
  container: {
    margin: 15,
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
      <div style={{ paddingLeft: 5 }}>{text}</div>
    </div>
  )
}

export default BtnBlueShadow
