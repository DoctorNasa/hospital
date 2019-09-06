import React from "react"

const TitleDiv = ({ text, color, textAlign }) => {
  return (
    <div
      style={{
        color: color ? color : "#666666",
        padding: 16,
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
