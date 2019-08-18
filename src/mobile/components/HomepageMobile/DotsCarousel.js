import React from "react"

const styles = color => ({
  bulletinactive: {
    borderRadius: "50%",
    height: "15px",
    width: "15px",
    backgroundColor: color,
    opacity: "0.3",
    marginRight: "6px",
    cursor: "pointer"
  },
  bulletactive: {
    borderRadius: "50%",
    height: "15px",
    width: "15px",
    backgroundColor: color,
    marginRight: "6px"
  }
})

const DotsCarousel = ({
  handleStepChange,
  slidesLength,
  activeIndex,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  color
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        zIndex: 99,
        marginBottom,
        marginTop,
        marginLeft,
        marginRight
      }}
    >
      {new Array(slidesLength).fill(1).map((x, i) => (
        <div
          onClick={() => handleStepChange(i)}
          style={
            i === activeIndex
              ? styles(color).bulletactive
              : styles(color).bulletinactive
          }
        />
      ))}
    </div>
  )
}

export default DotsCarousel
