import React from "react"

const styles = {
  container: {
    backgroundColor: "white",
    padding: 15,
    paddingTop: 30,
    display: "flex",
    marginTop: 30
  },
  blackTitle: {
    flex: 1,
    color: "#2b2b2b",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },
  grayTitle: {
    flex: 1,
    color: "#5f5f5f",
    fontWeight: "bold",
    marginBottom: 30
  },
  price: {
    flex: 1,
    color: "#2b2b2b",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
}

const WhiteRectangle = () => {
  return (
    <div style={styles.container}>
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <div style={styles.blackTitle}>
          การขยายหลอดเลือดหัวใจด้วย บอลลูน (PCI)
        </div>
        <div style={styles.grayTitle}>2 วัน 1 คืน</div>
      </div>
      <div style={styles.price}>121,000</div>
    </div>
  )
}

export default WhiteRectangle
