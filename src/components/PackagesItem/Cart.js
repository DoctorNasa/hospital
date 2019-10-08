import React from "react"
import BtnCustomColor from "./BtnCustomColor"
import BtnCustomColorOutlined from "./BtnCustomColorOutlined"

const styles = {
  container: {
    marginLeft: 64,
    position: "sticky",
    top: 30
  },
  header: {
    backgroundColor: "#32bfc6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    color: "white",
    fontSize: 20
  },
  body: {
    background: "white",
    textAlign: "center"
  }
}

const Cart = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>แพคเกจที่คุณเลือก</div>
      <div style={styles.body}>
        <img
          src="/images/icons/graybox.png"
          style={{ width: 50, marginTop: 50 }}
        />
        <div style={{ color: "#d7d7d7", marginTop: 5, paddingBottom: 50 }}>
          คุณยังไม่ได้เลือกแพคเกจ
        </div>
        <BtnCustomColorOutlined />
        <BtnCustomColor />
      </div>
    </div>
  )
}

export default Cart
