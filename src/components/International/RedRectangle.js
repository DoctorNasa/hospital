import React from "react"

const RedRectangle = ({
  margin,
  backgroundColor = "#f37a6f",
  icon = "/images/icons/red-rectangle.png",
  title = "International Marketing",
  text = "Phyathai Hospital's International Marketing Department provides the marketing material supports to the facilitators."
}) => {
  return (
    <div
      style={{
        backgroundColor,
        borderRadius: 10,
        color: "white",
        padding: 30,
        margin,
        textAlign: "center",
        boxShadow: "0 1px 2px rgba(0,0,0,0.24)"
      }}
    >
      <img style={{ width: 50 }} src={icon} />
      <div style={{ fontWeight: "bold", padding: "15px 0px 15px 0px" }}>
        {title}
      </div>
      <div>{text}</div>
    </div>
  )
}

export default RedRectangle
