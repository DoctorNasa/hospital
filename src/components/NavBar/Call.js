import React from "react"
import SmartPhoneIcon from "@material-ui/icons/Smartphone"

const Call = () => {
  return (
    <div style={{ color: "#00826a" }}>
      <div style={{ display: "inline-block" }}>
        <SmartPhoneIcon />
      </div>

      <div style={{ display: "inline-block", marginLeft: 5 }}>call</div>
      <div
        style={{
          display: "inline-block",
          marginLeft: 5,
          marginTop: 2,
          fontSize: 30
        }}
      >
        1772
      </div>
    </div>
  )
}

export default Call
