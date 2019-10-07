import React, { useState } from "react"
import BtnBlue from "../BtnBlue"
import RemoveCircle from "@material-ui/icons/RemoveCircle"
import AddCircle from "@material-ui/icons/AddCircle"
import { flexbox } from "@material-ui/system"

const styles = {
  container: {
    backgroundColor: "white",
    padding: 15,
    paddingTop: 30,
    boxShadow: "0px 2px 6px -1px rgba(48,191,197,1)"
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

const PackageItem = () => {
  const [counter, setCounter] = useState(1)
  return (
    <div style={styles.container}>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <div style={styles.blackTitle}>การฉีดสีหลอดเลือด หัวใจ (CAG)</div>
          <div style={styles.grayTitle}>2 วัน 1 คืน</div>
        </div>
        <div style={styles.price}>39000</div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <div style={{ display: "flex", flex: 1 }}>
            <div style={{ flex: 1, display: "flex" }}>
              <img
                style={{ width: 50 }}
                src="/images/icons/package-add-icon.png"
              />
              <div style={{ marginLeft: 15 }}>เพิ่มจำนวน</div>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex"
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
        </div>
        <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
          <BtnBlue icon="/images/icons/add-cart.png" text="ใส่รถเข็น" />
        </div>
      </div>
    </div>

    //   <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
    //     <div
    //       style={{

    //       }}
    //     >
    //       การฉีดสีหลอดเลือด หัวใจ (CAG)
    //       <div style={{ color: "#5f5f5f", fontWeight: "bold" }}>
    //         2 วัน 1 คืน
    //       </div>
    //     </div>

    //     <div
    //       style={{
    //         flex: 1,

    //       }}
    //     >
    //       39,000 บาท
    //     </div>
    //   </div>
    //   <div style={{ display: "flex", flex: 1 }}>second</div>
    // </div>

    // <div style={styles.container}>
    //   <div style={styles.flexSection1}>
    //     <div
    //       style={{
    //         flex: 1
    //       }}
    //     >

    //     </div>

    //   </div>
    //   <div style={styles.flexSection2}>

    //   </div>
    //   <div style={{ textAlign: "center", marginTop: 15 }}>
    //     <BtnBlue icon="/images/icons/add-cart.png" text="ใส่รถเข็น" />
    //   </div>
    // </div>
  )
}

export default PackageItem
