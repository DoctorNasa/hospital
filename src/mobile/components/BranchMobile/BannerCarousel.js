import React, { useState } from "react"
import { useTheme } from "@material-ui/core/styles"
import SwipeableViews from "react-swipeable-views"
import BtnBlue from "../BtnBlue"
import { autoPlay } from "react-swipeable-views-utils"
import DotsCarousel from "../DotsCarousel"

const styleMobileBanner = img => ({
  background: `url(${img})`,
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  height: "100%"
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
    imgPath: "/images/branch/mobile/banner-bg.jpg"
  },
  {
    title: "โรงพยาบาลพญาไท 1",
    imgPath: "/images/branch/mobile/banner-bg.jpg"
  },
  {
    title: "โรงพยาบาลพญาไท 1",
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
          <div key={x.label} style={styleMobileBanner(x.imgPath)}>
            <h1 style={{ paddingTop: 80 }}>{x.title}</h1>
            <div
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              style={styles.containerMobile}
            >
              <h1
                style={{
                  textAlign: "center",
                  color: "#4d4d4d",
                  marginTop: 0,
                  marginBottom: 0
                }}
              >
                ครอบครัวมีความสุขหยุด ทุกอาการป่วยช่วยให้คุณไปต่อ
              </h1>
              <h2
                style={{
                  color: "grey",
                  textAlign: "center",
                  color: "#818385",
                  marginTop: 0,
                  marginBottom: 0
                }}
              >
                เริ่มเปลี่ยนตัวเองให้เป็นคนใหม่ ให้พญาไทยดูแลคุณ
              </h2>
              <BtnBlue text="ดูรายละเอียดเพิ่มเติม" />
            </div>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <DotsCarousel
        color="#71c6a2"
        handleStepChange={handleStepChange}
        slidesLength={slides.length}
        activeIndex={activeStep}
      />
    </div>
  )
}

export default BannerCarousel
