import React from "react"
import ArrowBackIos from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"

const styles = {
  bulletinactive: {
    borderRadius: "50%",
    height: "15px",
    width: "15px",
    backgroundColor: "#71c6a2",
    opacity: "0.3",
    margin: "0px 3px 0px 3px",
    cursor: "pointer"
  },
  bulletactive: {
    borderRadius: "50%",
    height: "15px",
    width: "15px",
    backgroundColor: "#71c6a2",
    margin: "0px 3px 0px 3px"
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
  color,
  noArrow
}) => {
  if (noArrow)
    return (
      <div
        style={{
          display: "flex",
          zIndex: 99,
          marginTop,
          marginLeft,
          marginRight,
          marginBottom
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

  if (!noArrow)
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
        <ArrowBackIos
          onClick={() => activeIndex !== 0 && handleStepChange(activeIndex - 1)}
          style={styles.arrows}
        />
        {new Array(slidesLength).fill(1).map((x, i) => (
          <div
            onClick={() => handleStepChange(i)}
            style={
              i === activeIndex ? styles.bulletactive : styles.bulletinactive
            }
          />
        ))}
        <ArrowForwardIos
          onClick={() =>
            activeIndex !== slidesLength - 1 &&
            handleStepChange(activeIndex + 1)
          }
          style={styles.arrows}
        />
      </div>
    )
}

export default DotsCarousel
