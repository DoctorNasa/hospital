import React, { useState } from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import SwipeableViews from "react-swipeable-views"
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"
import Button from "@material-ui/core/Button"
import { autoPlay } from "react-swipeable-views-utils"
import Box from "@material-ui/core/Box"
import DotsCarousel from "../DotsCarousel"

const styles = {
  containerMobile: {
    paddingTop: 70,
    marginRight: 10,
    marginLeft: 10
  }
}

const styleSlide = url => ({
  background: `url(${url})`,
  backgroundSize: "100% 250px",
  backgroundRepeat: "no-repeat"
})

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const slides = [
  {
    imgPath: "/images/cardCarousel.png",
    title: "Hidden Hunger ภาวะขาดวิตามิน ที่คุณอาจเป็น...แต่ไม่เคยรู้ตัว",
    subtitle: "จากการศึกษาของ WHO หรือองค์กรอนามัยโลก พบว่าพฤติกรรมการรับประทา"
  },
  {
    imgPath: "/images/cardCarousel.png",
    title: "Hidden Hunger ภาวะขาดวิตามิน ที่คุณอาจเป็น...แต่ไม่เคยรู้ตัว #1",
    subtitle:
      "จากการศึกษาของ WHO หรือองค์กรอนามัยโลก พบว่าพฤติกรรมการรับประทา #1"
  },
  {
    imgPath: "/images/cardCarousel.png",
    title: "Hidden Hunger ภาวะขาดวิตามิน ที่คุณอาจเป็น...แต่ไม่เคยรู้ตัว #2",
    subtitle:
      "จากการศึกษาของ WHO หรือองค์กรอนามัยโลก พบว่าพฤติกรรมการรับประทา #2"
  }
]

function CardsCarousel() {
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
      {slides.map(({ imgPath, title, subtitle }, index) => (
        <div>
          <div
            style={{
              backgroundColor: "#ffd1db"
            }}
          >
            <img src={imgPath} style={{ width: "100%" }} />
            <div
              style={{
                paddingLeft: 15,
                paddingRight: 15
              }}
            >
              <div
                style={{
                  marginTop: 15,
                  marginBottom: 15,
                  textAlign: "center",
                  color: "#4d4d4d",
                  fontSize: 20,
                  fontWeight: 600
                }}
              >
                {title}
              </div>
              <div
                style={{
                  color: "grey",
                  textAlign: "center",
                  color: "#818385"
                }}
              >
                {subtitle}
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{ paddingTop: 30, paddingBottom: 30, fontSize: 20 }}
                >
                  อ่านต่อ <ArrowForwardIos style={{ fontSize: 14 }} />
                </div>
              </div>
            </div>
          </div>

          <DotsCarousel
            color="#71c6a2"
            handleStepChange={handleStepChange}
            slidesLength={slides.length}
            activeIndex={index}
            marginTop={30}
            marginBottom={30}
          />
        </div>
      ))}
    </AutoPlaySwipeableViews>
  )
}

export default CardsCarousel
