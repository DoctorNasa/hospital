import React from "react"

const TitleDiv = ({ text, color, textAlign, padding = 16 }) => {
  return (
    <div
      style={{
        color: color ? color : "#666666",
        padding,
        fontWeight: "bold",
        fontSize: 20,
        textAlign
      }}
    >
      {text}
    </div>
  )
}

export default TitleDiv
