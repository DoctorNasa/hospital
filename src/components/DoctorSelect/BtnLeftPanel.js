import React from "react"
import { Link } from "react-router-dom"

const styles = {
  container: {
    padding: 16
  },
  notActive: {
    padding: 20,
    borderRadius: 5,
    color: "#8a8a88",
    textAlign: "center",
    fontSize: 20,
    cursor: "pointer"
  },
  active: {
    padding: 20,
    margin: 10,
    borderRadius: 5,
    color: "#30bfc5",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    boxShadow: "0px 3px 24px -6px rgba(48,191,197,1)",
    background: "white"
  }
}

const BtnLeftPanel = ({ queries }) => {
  return (
    <div style={styles.container}>
      <Link to="/doctor-select?booking=true" style={{ textDecoration: "none" }}>
        <div style={queries.booking ? styles.active : styles.notActive}>
          แนะนำแพทย์ให้ฉัน
        </div>
      </Link>
      <Link to="/doctor-select" style={{ textDecoration: "none" }}>
        <div style={queries.booking ? styles.notActive : styles.active}>
          เลือกแพทย์ด้วยตัวเอง
        </div>
      </Link>
    </div>
  )
}

export default BtnLeftPanel
