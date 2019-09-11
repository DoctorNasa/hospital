import React from "react"
import BtnBlue from "../../BtnBlue"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const styles = {
  container: {
    backgroundImage: 'url("/images/success-bg-appointment.jpg")',
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    height: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    color: "gray",
    textAlign: "center"
  }
}

const Success = () => {
  return (
    <div style={styles.container}>
      <div>
        <img src="/images/icons/calendar-success-icon.png" />
        <div style={{ color: "#30bfc5" }}>
          คุณได้ทำการนัดแพทย์เสร็จเรียบร้อย
        </div>
        <div style={{ color: "#6c6b6a" }}>ทางโรงพยาบาลจะตอบรับการนัดหมา</div>
        <div
          style={{
            color: "#00826a",
            fontWeight: "bold",
            marginTop: 10,
            marginBottom: 5
          }}
        >
          สอบถามเพิ่มเติม
        </div>
        <img src="/images/icons/phone-icons.png" />
        <div style={{ marginTop: 20 }}>
          <Link style={{ textDecoration: "none", cursor: "pointer" }} to="/">
            <BtnBlue text="ตกลง" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Success
