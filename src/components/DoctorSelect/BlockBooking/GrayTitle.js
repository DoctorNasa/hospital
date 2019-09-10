import React from "react"

const GrayTitle = ({ text }) => {
  return (
    <div
      style={{
        color: "#6c6b6a",
        fontSize: 15,
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 10
      }}
    >
      {text}
    </div>
  )
}

export default GrayTitle
