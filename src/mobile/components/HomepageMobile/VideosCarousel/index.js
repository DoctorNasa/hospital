import React from "react"
import { useTheme } from "@material-ui/core/styles"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import DotsCarousel from "../DotsCarousel"
import YoutubeModal from "./YoutubeModal"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const slides = [
  {
    vidId: "3bkZhGexTII",
    title: "หดหู่ หงุดหงิดง่าย หลับไม่สนิท สัญญาณ “โรคซึมเศร้า” ที่ต้องรีบร 1 ",
    desc: "ความผิดปกติเกี่ยวกับ “กระดูกสันหลัง” มีความเกี่ยวข้องกับหลากหลา"
  },
  {
    vidId: "bC9fJ-19LZY",
    title: "หดหู่ หงุดหงิดง่าย หลับไม่สนิท สัญญาณ “โรคซึมเศร้า” ที่ต้องรีบร 2",
    desc: "ความผิดปกติเกี่ยวกับ “กระดูกสันหลัง” มีความเกี่ยวข้องกับหลากหลา"
  },
  {
    vidId: "97nyYTBPJi4",
    title: "หดหู่ หงุดหงิดง่าย หลับไม่สนิท สัญญาณ “โรคซึมเศร้า” ที่ต้องรีบร 3",
    desc: "ความผิดปกติเกี่ยวกับ “กระดูกสันหลัง” มีความเกี่ยวข้องกับหลากหลา"
  }
]

const styles = {
  item: {
    background: "#f2bd61",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.45)"
  },
  itemDesc: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  }
}

const VideosCarousel = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    if (activeStep !== 2)
      return setActiveStep(prevActiveStep => prevActiveStep + 1)
    if (activeStep === 2) return setActiveStep(0)
  }

  const handleBack = () => {
    if (activeStep !== 0)
      return setActiveStep(prevActiveStep => prevActiveStep - 1)
    if (activeStep === 0) return setActiveStep(2)
  }

  const handleStepChange = step => {
    setActiveStep(step)
  }

  return (
    <div style={{ paddingTop: 20 }}>
      <h3
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: 25,
          color: "#4d4d4d"
        }}
      >
        Phyathai channel
      </h3>
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
              <div>
                <YoutubeModal vidId={slide.vidId} />
                <div style={{ paddingLeft: 10, paddingRight: 10 }}>
                  <div
                    style={{
                      marginTop: 15,
                      marginBottom: 15,
                      color: "#4d4d4d",
                      fontSize: 20,
                      fontWeight: 600
                    }}
                  >
                    {slide.title}
                  </div>
                  <div
                    style={{
                      color: "#818385"
                    }}
                  >
                    {slide.desc}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <DotsCarousel
        handleStepChange={handleStepChange}
        slidesLength={slides.length}
        activeIndex={activeStep}
        marginTop={30}
      />
    </div>
  )
}

export default VideosCarousel
