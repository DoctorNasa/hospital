import React from "react"

const TitlePackageItem = ({ text, padding, color }) => {
  return (
    <div
      style={{
        color: color ? color : "#4d4d4d",
        fontWeight: "bold",
        fontSize: 23,
        padding
      }}
    >
      {text}
    </div>
  )
}

export default TitlePackageItem
