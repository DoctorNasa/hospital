import React from "react"

const TitleBlueIcon = ({ text, img, padding = "0px 0px 15px 0px" }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", padding }}>
      <img style={{ height: 25 }} src={img} />
      <div
        style={{
          marginLeft: 10,
          color: "#30bfc5",
          fontSize: 20,
          fontWeight: "bold"
        }}
      >
        {text}
      </div>
    </div>
  )
}

export default TitleBlueIcon
