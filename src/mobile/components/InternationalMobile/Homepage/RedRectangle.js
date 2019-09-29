import React from "react"

const RedRectangle = () => {
  return (
    <div
      style={{
        background: "#f37a6f",
        borderRadius: 5,
        color: "white",
        padding: 30,
        marginTop: 15,
        textAlign: "center",
        boxShadow: "0 1px 2px rgba(0,0,0,0.24)",
        marginBottom: 15
      }}
    >
      <img style={{ width: 50 }} src="/images/icons/red-rectangle.png" />
      <div style={{ fontWeight: "bold", padding: "15px 0px 15px 0px" }}>
        International Marketing
      </div>
      <div>
        Phyathai Hospital's International Marketing Department provides the
        marketing material supports to the facilitators.
      </div>
    </div>
  )
}

export default RedRectangle
