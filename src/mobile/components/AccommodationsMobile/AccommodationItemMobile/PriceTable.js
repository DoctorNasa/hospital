import React from "react"

const styles = {
  container: {
    padding: "30px 15px 30px 15px"
  },
  shadowing: {
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)"
  },
  header: {
    background: "#d7f3f4",
    textAlign: "center",
    padding: "15px 0px 15px 0px",
    fontWeight: "bold"
  },
  content: {
    padding: "13px 15px 13px 15px",
    background: "white"
  },
  descLine: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2px 0px 2px 0px"
  },
  totalLine: {
    display: "flex",
    justifyContent: "space-between",
    padding: "13px 0px 2px 0px",
    color: "#30bfc5",
    fontWeight: "bold"
  }
}

const PriceTable = () => {
  return (
    <div style={styles.container}>
      <div style={styles.shadowing}>
        <div style={styles.header}>รายละเอียดราคาห้อง</div>
        <div style={styles.content}>
          <div style={styles.descLine}>
            <div>ค่าห้อง</div>
            <div>17,000 บาท</div>
          </div>
          <div style={styles.descLine}>
            <div>ค่าบริการพยาบาล</div>
            <div>2,500 บาท</div>
          </div>
          <div style={styles.descLine}>
            <div>ค่าบริการโรงพยาบาล</div>
            <div>3,110 บาท</div>
          </div>
          <div style={styles.totalLine}>
            <div>ราคารวมทั้งสิ้นต่อวัน</div>
            <div>22,610 บาท</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceTable
