import React, { useState } from "react"
import { useTheme } from "@material-ui/core/styles"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import DotsCarousel from "../DotsCarousel"

const styleMobileBanner = img => ({
  background: `url(${img})`,
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat"
})

const styles = {
  containerMobile: {
    paddingTop: 380,
    marginRight: 10,
    marginLeft: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const slides = [
  {
    title: "โรงพยาบาลพญาไท 1",
    content:
      "Integer euismod, libero non pellentesque pharetra, diam elit dapibus est, quis posuere urna sem eget augue. Duis faucibus commodo rhoncus. Aliquam eget magna ut ex fringilla condimentum a id libero. Phasellus tristique mauris ultricies tortor hendrerit pellentesque. Cras maximus molestie neque a venenatis.",
    imgPath: "/images/branch/mobile/banner-bg.jpg"
  },
  {
    title: "โรงพยาบาลพญาไท 1",
    content:
      "Integer euismod, libero non pellentesque pharetra, diam elit dapibus est, quis posuere urna sem eget augue. Duis faucibus commodo rhoncus. Aliquam eget magna ut ex fringilla condimentum a id libero. Phasellus tristique mauris ultricies tortor hendrerit pellentesque. Cras maximus molestie neque a venenatis.",
    imgPath: "/images/branch/mobile/banner-bg.jpg"
  },
  {
    title: "โรงพยาบาลพญาไท 1",
    content:
      "Integer euismod, libero non pellentesque pharetra, diam elit dapibus est, quis posuere urna sem eget augue. Duis faucibus commodo rhoncus. Aliquam eget magna ut ex fringilla condimentum a id libero. Phasellus tristique mauris ultricies tortor hendrerit pellentesque. Cras maximus molestie neque a venenatis.",
    imgPath: "/images/branch/mobile/banner-bg.jpg"
  }
]

function BannerCarousel() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStepChange = x => {
    setActiveStep(x)
  }

  return (
    <div>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {slides.map((x, index) => (
          <div>
            <div style={{ position: "relative" }}>
              <img src={x.imgPath} style={{ width: "100%" }} />
              <div style={{ position: "absolute", top: 100 }}>
                <h1>{x.title}</h1>
              </div>

              <div
                style={{
                  marginTop: 30,
                  marginBottom: 30,
                  marginLeft: 15,
                  marginRight: 15
                }}
              >
                {x.content}
              </div>
            </div>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <DotsCarousel
        color="#71c6a2"
        handleStepChange={handleStepChange}
        slidesLength={slides.length}
        activeIndex={activeStep}
        noArrow
        marginLeft={15}
      />
    </div>
  )
}

export default BannerCarousel
