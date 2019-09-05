import React from "react"

const TitleH3 = ({ text }) => {
  return (
    <h3
      style={{
        color: "#666666",
        padding: 16,
        fontWeight: "bold",
        fontSize: 25,
        color: "#4d4d4d",
        textAlign: "center"
      }}
    >
      {text}
    </h3>
  )
}

export default TitleH3
