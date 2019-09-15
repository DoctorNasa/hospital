import React from "react"

const TitlePackageCategory = ({ text, padding, img, color }) => {
  return (
    <div style={{ display: "flex", padding, alignItems: "center" }}>
      <div>
        <img
          style={{ height: 30 }}
          src={img ? img : "/images/icons/titles-icon.jpg"}
        />
      </div>
      <div
        style={{
          color: color ? color : "#2b2b2b",
          fontWeight: "bold",
          paddingLeft: 10
        }}
      >
        {text}
      </div>
    </div>
  )
}

export default TitlePackageCategory
