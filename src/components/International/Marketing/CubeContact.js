import React from "react"
import BtnBlue from "../../BtnBlue"

const CubeContacct = () => {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        justifyContent: "center",
        aignItems: "center",
        flexDirection: "column",
        boxShadow: "0px 0px 5px 0px rgba(209,207,209,1)",

        width: 200,
        height: 200
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img style={{ width: 80 }} src="/images/icons/international/msg.jpg" />
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          marginTop: 10
        }}
      >
        <BtnBlue text="Contact us" size="small" />
      </div>
    </div>
  )
}

export default CubeContacct
