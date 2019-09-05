import React from "react"

const TitleDiv = ({ text }) => {
  return (
    <div
      style={{
        color: "#666666",
        padding: 16,
        fontWeight: "bold",
        fontSize: 20
      }}
    >
      {text}
    </div>
  )
}

export default TitleDiv
