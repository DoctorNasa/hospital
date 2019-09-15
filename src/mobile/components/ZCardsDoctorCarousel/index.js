import React, { useState } from "react"
import { useTheme } from "@material-ui/core/styles"
import SwipeableViews from "react-swipeable-views"
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"
import { autoPlay } from "react-swipeable-views-utils"
import DotsCarousel from "../DotsCarousel"
import DoctorItem from "./DoctorItem"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const slides = [
  {
    imgPath: "/images/doctor-select.jpg",
    title: "Hidden Hunger ภาวะขาดวิตามิน ที่คุณอาจเป็น...แต่ไม่เคยรู้ตัว",
    subtitle: "จากการศึกษาของ WHO หรือองค์กรอนามัยโลก พบว่าพฤติกรรมการรับประทา"
  },
  {
    imgPath: "/images/doctor-select.jpg",
    title: "Hidden Hunger ภาวะขาดวิตามิน ที่คุณอาจเป็น...แต่ไม่เคยรู้ตัว #1",
    subtitle:
      "จากการศึกษาของ WHO หรือองค์กรอนามัยโลก พบว่าพฤติกรรมการรับประทา #1"
  },
  {
    imgPath: "/images/doctor-select.jpg",
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
    <div style={{ paddingTop: 20, marginLeft: 15, marginRight: 15 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {slides.map(({ imgPath, title, subtitle }, index) => (
          <DoctorItem
            key={index}
            img={imgPath}
            text="คลินิก ศูนย์เวชศาสตร์ชะลอวัย โรงพยาบาล พญาไท 2"
          />
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

export default CardsCarousel
