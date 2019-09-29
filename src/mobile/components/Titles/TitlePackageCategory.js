import React from "react"

const TitlePackageCategory = ({
  text,
  noImg,
  padding,
  img = "/images/icons/titles-icon.jpg",
  imgSize = 30,
  color,
  fontSize,
  fontWeight = "bold"
}) => {
  return (
    <div style={{ display: "flex", padding, alignItems: "center" }}>
      {!noImg && <img style={{ height: imgSize }} src={img} />}

      <div
        style={{
          color: color ? color : "#2b2b2b",
          fontWeight,
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
