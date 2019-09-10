import React from "react"

const TitlesSection = ({ text, marginLeft, marginRight, marginTop }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: 50,
        fontWeight: "bold",
        fontSize: 20,
        marginLeft,
        marginRight,
        marginTop
      }}
    >
      <img
        style={{ height: 30, marginRight: 20 }}
        src="/images/icons/titles-icon.jpg"
      />
      {text}
    </div>
  )
}

export default TitlesSection
