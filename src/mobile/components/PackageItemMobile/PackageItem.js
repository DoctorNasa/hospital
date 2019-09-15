import React, { useState } from "react"
import BtnBlue from "../BtnBlue"
import RemoveCircle from "@material-ui/icons/RemoveCircle"
import AddCircle from "@material-ui/icons/AddCircle"

const styles = {
  container: {
    backgroundColor: "white",
    padding: 15,
    paddingTop: 30,
    boxShadow: "0px 2px 6px -1px rgba(48,191,197,1)"
  },
  flexSection1: {
    display: "flex",
    justifyContent: "space-between"
  },
  flexSection2: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 30
  }
}

const PackageItem = () => {
  const [counter, setCounter] = useState(1)
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
            การฉีดสีหลอดเลือด หัวใจ (CAG)
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
          39,000 บาท
        </div>
      </div>
      <div style={styles.flexSection2}>
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <img style={{ width: 50 }} src="/images/icons/package-add-icon.png" />
          <div style={{ marginLeft: 15 }}>เพิ่มจำนวน</div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly"
          }}
        >
          <RemoveCircle
            style={{ color: "#30bfc5", fontSize: 40 }}
            onClick={() => counter > 1 && setCounter(counter - 1)}
          />
          <div style={{ fontSize: 20, width: 20, textAlign: "center" }}>
            {counter}
          </div>

          <AddCircle
            style={{ color: "#30bfc5", fontSize: 40 }}
            onClick={() => setCounter(counter + 1)}
          />
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: 15 }}>
        <BtnBlue icon="/images/icons/add-cart.png" text="ใส่รถเข็น" />
      </div>
    </div>
  )
}

export default PackageItem
