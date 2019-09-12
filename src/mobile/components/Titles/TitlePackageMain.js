import React from "react"

const TitlePackageMain = ({ text, padding }) => {
  return (
    <div
      style={{
        color: "#666666",
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
