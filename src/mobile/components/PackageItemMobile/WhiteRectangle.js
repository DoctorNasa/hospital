import React from "react"

const styles = {
  container: {
    marginTop: 15,
    padding: 15,
    background: "white"
  },
  flexSection1: {
    display: "flex",
    justifyContent: "space-between"
  }
}

const WhiteRectangle = () => {
  return (
    <div style={styles.container}>
      <div style={styles.flexSection1}>
        <div
          style={{
            flex: 1
          }}
        >
          <div
            style={{
              flex: 1,
              color: "#2b2b2b",
              fontSize: 18,
              fontWeight: "bold"
            }}
          >
            การขยายหลอดเลือด หัวใจด้วยบอลลูน (PCI)
          </div>
          <div style={{ color: "#5f5f5f", fontWeight: "bold" }}>
            2 วัน 1 คืน
          </div>
        </div>

        <div
          style={{
            flex: 1,
            color: "#2b2b2b",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "end"
          }}
        >
          121,000 บาท
        </div>
      </div>
    </div>
  )
}

export default WhiteRectangle
