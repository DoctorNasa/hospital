import React from "react"

const styles = {
  bulletinactive: {
    borderRadius: "50%",
    height: "15px",
    width: "15px",
    backgroundColor: "#71c6a2",
    opacity: "0.3",
    marginRight: "6px",
    cursor: "pointer"
  },
  bulletactive: {
    borderRadius: "50%",
    height: "15px",
    width: "15px",
    backgroundColor: "#71c6a2",
    marginRight: "6px"
  },
  arrows: {
    fontSize: 25,
    color: "#00826a",
    cursor: "pointer",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 25,
    paddingBottom: 25
  }
}

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
        marginRight,
        justifyContent: "center"
      }}
    >
      {new Array(slidesLength).fill(1).map((x, i) => (
        <div
          onClick={() => handleStepChange(i)}
          style={
            i === activeIndex ? styles.bulletactive : styles.bulletinactive
          }
        />
      ))}
    </div>
  )
}

export default DotsCarousel
