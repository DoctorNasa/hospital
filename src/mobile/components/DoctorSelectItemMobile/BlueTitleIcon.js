import React from "react"
import BreadCrumb from "../BreadCrumb"

const styles = {
  container: {
    padding: "15px 0px 15px 0px",
    display: "flex"
  },
  textField: {
    color: "#32bfc6",
    background: "#eefafb",
    fontWeight: "bold",
    width: "100%",
    fontSize: 20,
    paddingLeft: 15,
    display: "flex",
    alignItems: "center"
  },
  iconField: {
    background: "#32bfc6"
  }
}

const BlueTitleIcon = ({ text = "พญ.วรนุช จุนพึ่งพระเกียรติ์" }) => {
  return (
    <div style={styles.container}>
      <div style={styles.iconField}>
        <img
          style={{ height: 20, padding: "10px 15px 10px 14px" }}
          src="/images/icons/medicIconWhite.png"
        />
      </div>
      <div style={styles.textField}>{text}</div>
    </div>
  )
}

export default BlueTitleIcon
