import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import SwipeableViews from "react-swipeable-views"
import Grid from "@material-ui/core/Grid"
import { autoPlay } from "react-swipeable-views-utils"
import DotsCarousel from "./DotsCarousel"
import "./carouselsStyle.css"
import BtnBlue from "./BtnBlue"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const styles = {
  containerTxt: {
    paddingRight: 10
  }
}

const slides = [
  {
    imgPath: "/images/testiImage-background.jpg",
    title: "1จากใจผู้ใช้บริการ",
    testimonial:
      "Lorem ipsuma quis sem luctus interdum vestibulum id quam. Sed justo sem, rhoncus sed nibh in, malesuada ultricies lacus. Nam tempor, dolor nec congue lacinia, nibh magna vulputate ligula, molestie viverra dolor est quis enim. Donec sit amet convallis sem. Morbi ut erat nec tortor ultricies rhoncus condimentum ut nulla. Sed vitae nisi ac nunc molestie tempor. Class aptent taciti sociosqu"
  },
  {
    imgPath: "/images/testiImage-background.jpg",
    title: "2จากใจผู้ใช้บริการ",
    testimonial:
      "Lorem ipsuma quis sem luctus interdum vestibulum id quam. Sed justo sem, rhoncus sed nibh in, malesuada ultricies lacus. Nam tempor, dolor nec congue lacinia, nibh magna vulputate ligula, molestie viverra dolor est quis enim. Donec sit amet convallis sem. Morbi ut erat nec tortor ultricies rhoncus condimentum ut nulla. Sed vitae nisi ac nunc molestie tempor. Class aptent taciti sociosqu"
  },
  {
    imgPath: "/images/testiImage-background.jpg",
    title: "3จากใจผู้ใช้บริการ",
    testimonial:
      "Lorem ipsuma quis sem luctus interdum vestibulum id quam. Sed justo sem, rhoncus sed nibh in, malesuada ultricies lacus. Nam tempor, dolor nec congue lacinia, nibh magna vulputate ligula, molestie viverra dolor est quis enim. Donec sit amet convallis sem. Morbi ut erat nec tortor ultricies rhoncus condimentum ut nulla. Sed vitae nisi ac nunc molestie tempor. Class aptent taciti sociosqu"
  },
  {
    imgPath: "/images/testiImage-background.jpg",
    title: "4จากใจผู้ใช้บริการ",
    testimonial:
      "Lorem ipsuma quis sem luctus interdum vestibulum id quam. Sed justo sem, rhoncus sed nibh in, malesuada ultricies lacus. Nam tempor, dolor nec congue lacinia, nibh magna vulputate ligula, molestie viverra dolor est quis enim. Donec sit amet convallis sem. Morbi ut erat nec tortor ultricies rhoncus condimentum ut nulla. Sed vitae nisi ac nunc molestie tempor. Class aptent taciti sociosqu"
  },
  {
    imgPath: "/images/testiImage-background.jpg",
    title: "5จากใจผู้ใช้บริการ",
    testimonial:
      "Lorem ipsuma quis sem luctus interdum vestibulum id quam. Sed justo sem, rhoncus sed nibh in, malesuada ultricies lacus. Nam tempor, dolor nec congue lacinia, nibh magna vulputate ligula, molestie viverra dolor est quis enim. Donec sit amet convallis sem. Morbi ut erat nec tortor ultricies rhoncus condimentum ut nulla. Sed vitae nisi ac nunc molestie tempor. Class aptent taciti sociosqu"
  }
]

const TestimonialCarousel = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    if (activeStep !== slides.length - 1)
      return setActiveStep(prevActiveStep => prevActiveStep + 1)
    if (activeStep === slides.length - 1) return setActiveStep(0)
  }

  const handleBack = () => {
    if (activeStep !== 0)
      return setActiveStep(prevActiveStep => prevActiveStep - 1)
    if (activeStep === 0) return setActiveStep(slides.length - 1)
  }

  const handleStepChange = step => {
    setActiveStep(step)
  }

  return (
    <Grid item sm={12}>
      <SwipeableViews
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
                <h3 style={{ fontSize: 25, textAlign: "center" }}>
                  {slide.title}
                </h3>
                <div>
                  <img style={{ width: "100%" }} src={slide.imgPath} />
                </div>
                <div style={{ paddingLeft: 15, paddingRight: 15 }}>
                  <div style={{ marginTop: 15, textAlign: "left" }}>
                    <img
                      style={{ width: 50 }}
                      src="/images/iconStartTesti-landingpage.jpg"
                    />
                  </div>

                  <div
                    style={{
                      padding: 15,
                      textAlign: "center"
                    }}
                  >
                    {slide.testimonial}
                  </div>
                  <div style={{ width: "100%", textAlign: "end" }}>
                    <img
                      style={{ width: 50 }}
                      src="/images/iconEndTesti-landingpage.jpg"
                    />
                  </div>
                </div>
                <BtnBlue
                  text="ดูทั้งหมด"
                  textAlign="center"
                  paddingBottom={15}
                />
              </div>
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <DotsCarousel
        handleStepChange={handleStepChange}
        slidesLength={slides.length}
        activeIndex={activeStep}
      />
    </Grid>
  )
}

export default TestimonialCarousel
