import React from "react"

const Cube = ({ title, image }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        color: "white",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        width: 200,
        height: 200,
        boxShadow: "0px 0px 5px 0px rgba(209,207,209,1)"
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>{title}</div>
    </div>
  )
}

export default Cube
