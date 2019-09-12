import React from "react"

const TitlePackageItem = ({ text, padding }) => {
  return (
    <div
      style={{
        color: "#4d4d4d",
        fontWeight: "bold",
        padding
      }}
    >
      {text}
    </div>
  )
}

export default TitlePackageItem
