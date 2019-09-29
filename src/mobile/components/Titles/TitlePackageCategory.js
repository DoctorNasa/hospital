import React from "react"

const TitlePackageCategory = ({
  text,
  padding,
  img = "/images/icons/titles-icon.jpg",
  imgSize = 30,
  color,
  fontSize
}) => {
  return (
    <div style={{ display: "flex", padding, alignItems: "center" }}>
      <img style={{ height: imgSize }} src={img} />
      <div
        style={{
          color: color ? color : "#2b2b2b",
          fontWeight: "bold",
          paddingLeft: 10,
          fontSize
        }}
      >
        {text}
      </div>
    </div>
  )
}

export default TitlePackageCategory
