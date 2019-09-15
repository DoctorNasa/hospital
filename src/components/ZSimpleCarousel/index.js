import React, { useState } from "react"
import { useTheme } from "@material-ui/core/styles"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import DotsCarousel from "../DotsCarousel"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const slides = [
  {
    urlImg: "/images/carousel-slide.jpg"
  },
  {
    urlImg: "/images/carousel-slide.jpg"
  },
  {
    urlImg: "/images/carousel-slide.jpg"
  }
]
const ZSimpleCarousel = ({ marginTop }) => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)

  const handleStepChange = step => {
    setActiveStep(step)
  }

  return (
    <div style={{ marginTop }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{ width: "100%" }}
      >
        {slides.map((slide, index) => (
          <div key={slide.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img src={slide.urlImg} style={{ width: "100%" }} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <div style={{ paddingTop: 30 }}>
        <DotsCarousel
          handleStepChange={handleStepChange}
          slidesLength={slides.length}
          activeIndex={activeStep}
        />
      </div>
    </div>
  )
}

export default ZSimpleCarousel
