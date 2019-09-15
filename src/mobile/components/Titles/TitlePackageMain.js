import React from "react"

const TitlePackageMain = ({ text, padding, color }) => {
  return (
    <div
      style={{
        color: color ? color : "#666666",
        fontWeight: "bold",
        fontSize: 20,
        padding
      }}
    >
      {text}
    </div>
  )
}

export default TitlePackageMain
