import React, { useState } from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import SwipeableViews from "react-swipeable-views"
import BtnBlue from "./BtnBlue"
import { autoPlay } from "react-swipeable-views-utils"
import Box from "@material-ui/core/Box"
import DotsCarousel from "./DotsCarousel"

const styles = {
  bannerMobile: {
    background: "url(/images/mobile-background-landingpage-top.jpg)",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    height: "100%"
  },
  containerMobile: {
    paddingTop: 70,
    marginRight: 10,
    marginLeft: 10
  }
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const slides = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "/images/mobile-background-landingpage-top.jpg"
  },
  {
    label: "Bird",
    imgPath: "/images/mobile-background-landingpage-top.jpg"
  },
  {
    label: "Bali, Indonesia",
    imgPath: "/images/mobile-background-landingpage-top.jpg"
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

  const handleStepChange = step => {
    setActiveStep(step)
  }

  return (
    <AutoPlaySwipeableViews
      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      {slides.map((step, index) => (
        <div key={step.label} style={styles.bannerMobile}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            style={styles.containerMobile}
          >
            <h1 style={{ textAlign: "center", color: "#4d4d4d" }}>
              ครอบครัวมีความสุขหยุด ทุกอาการป่วยช่วยให้คุณไปต่อ
            </h1>
            <h2
              style={{
                color: "grey",
                textAlign: "center",
                color: "#818385"
              }}
            >
              เริ่มเปลี่ยนตัวเองให้เป็นคนใหม่ ให้พญาไทยดูแลคุณ
            </h2>
            <BtnBlue text="ดูรายละเอียดเพิ่มเติม" />
            <DotsCarousel
              color="#71c6a2"
              handleStepChange={handleStepChange}
              slidesLength={slides.length}
              activeIndex={index}
              marginTop={30}
              marginBottom={30}
            />
          </Box>
        </div>
      ))}
    </AutoPlaySwipeableViews>
  )
}

export default BannerCarousel
