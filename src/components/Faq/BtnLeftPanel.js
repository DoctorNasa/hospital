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
    cursor: "pointer",
    display: "flex",
    justifyContent: "center"
  },
  active: {
    padding: 20,
    margin: 10,
    borderRadius: 5,
    color: "#30bfc5",
    textAlign: "center",
    fontSize: 20,
    boxShadow: "0px 3px 24px -6px rgba(48,191,197,1)",
    background: "white",
    display: "flex",
    justifyContent: "center"
  }
}

const BtnLeftPanel = ({ questionPage, _questionPage }) => {
  return (
    <div style={styles.container}>
      <div
        onClick={() => _questionPage(false)}
        style={!questionPage ? styles.active : styles.notActive}
      >
        <img
          style={{ height: 35 }}
          src={
            !questionPage
              ? "/images/icons/questionblue.jpg"
              : "/images/icons/questiongray.jpg"
          }
        />
        <div style={{ display: "flex", marginLeft: 15, alignItems: "center" }}>
          คำถามที่พบบ่อย
        </div>
      </div>
      <div
        onClick={() => _questionPage(true)}
        style={!questionPage ? styles.notActive : styles.active}
      >
        <img
          style={{ height: 35 }}
          src={
            questionPage
              ? "/images/icons/doctor-blue.png"
              : "/images/icons/doctor-gray.png"
          }
        />
        <div style={{ display: "flex", marginLeft: 15, alignItems: "center" }}>
          เลือกแพทย์ด้วยตัวเอง
        </div>
      </div>
    </div>
  )
}

export default BtnLeftPanel
