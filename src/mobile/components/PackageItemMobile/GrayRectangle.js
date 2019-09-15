import React from "react"

const styles = {
  container: {
    marginTop: 15,
    padding: 15,
    background: "#ebebeb",
    color: "#00826a"
  }
}

const GrayRectangle = () => {
  return (
    <div style={styles.container}>
      <b>หมายเหตุ</b>
      <div>แพคเกจนี้สามารถใช้ได้ภายในวันที่ 1 ก.ค 2562 - วันที่</div>
    </div>
  )
}

export default GrayRectangle
