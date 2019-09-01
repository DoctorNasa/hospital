import React, { useState } from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import DotsCarousel from "../DotsCarousel"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const slides = [
  {
    imgPath: "/images/mobile/another-carousel-homepage.jpg",
    title: "Hidden Hunger ภาวะขาดวิตามิน ที่คุณอาจเป็น...แต่ไม่เคยรู้ตัว",
    subtitle: "จากการศึกษาของ WHO หรือองค์กรอนามัยโลก พบว่าพฤติกรรมการรับประทา"
  },
  {
    imgPath: "/images/mobile/another-carousel-homepage.jpg",
    title: "Hidden Hunger ภาวะขาดวิตามิน ที่คุณอาจเป็น...แต่ไม่เคยรู้ตัว #1",
    subtitle:
      "จากการศึกษาของ WHO หรือองค์กรอนามัยโลก พบว่าพฤติกรรมการรับประทา #1"
  },
  {
    imgPath: "/images/mobile/another-carousel-homepage.jpg",
    title: "Hidden Hunger ภาวะขาดวิตามิน ที่คุณอาจเป็น...แต่ไม่เคยรู้ตัว #2",
    subtitle:
      "จากการศึกษาของ WHO หรือองค์กรอนามัยโลก พบว่าพฤติกรรมการรับประทา #2"
  }
]

const AnotherCarousel = () => {
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
    <div style={{ paddingTop: 20 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {slides.map(({ imgPath, title, subtitle }, index) => (
          <div>
            <div style={{ position: "relative" }}>
              <img
                src={imgPath}
                style={{
                  width: "100%",
                  height: "650px",
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5
                }}
              />
              <div
                style={{ position: "absolute", top: 330, left: 0, right: 0 }}
              >
                <h3 style={{ textAlign: "center", fontSize: 25 }}>
                  ศูนย์ทางการแพทย์
                </h3>
                <div style={{ marginLeft: 15, marginRight: 15 }}>
                  <b>
                    นวัตกรรมใหม่ 'Bi-plane DSA'รักษาหลอดเลือด
                    สมองได้โดยไม่ต้องผ่าต
                  </b>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce eu lorem nec velit malesuada blandit id nec nibh. Sed
                    nec risus blandit, lobortis nulla vitae, dignissim massa.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce eu lorem nec velit malesuada blandit id nec nibh. Sed
                    nec risus blandit, lobortis nulla vitae, dignissim massa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <DotsCarousel
        handleStepChange={handleStepChange}
        slidesLength={slides.length}
        activeIndex={activeStep}
      />
    </div>
  )
}

export default AnotherCarousel
