import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import SwipeableViews from "react-swipeable-views"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import { autoPlay } from "react-swipeable-views-utils"
import ArrowBackIos from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"
import "./carouselsStyle.css"

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
    <Grid item sm={12} style={{ marginTop: 50 }}>
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
              <Grid container justify="space-between">
                <Grid item xs={12} md={5}>
                  <img
                    style={{ width: "100%", marginRight: 100 }}
                    src={slide.imgPath}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid item xs={12} md={8} style={styles.containerTxt}>
                    <b style={{ fontSIze: 25 }}>{slide.title}</b>
                    <div style={{ marginTop: 15, textAlign: "left" }}>
                      <img
                        style={{ width: 50 }}
                        src="/images/iconStartTesti-landingpage.jpg"
                      />
                    </div>

                    <p>{slide.testimonial}</p>
                    <div style={{ width: "100%", textAlign: "end" }}>
                      <img
                        style={{ width: 50 }}
                        src="/images/iconEndTesti-landingpage.jpg"
                      />
                    </div>
                    <div style={{ width: "100%", textAlign: "center" }}>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        style={{
                          color: "white",
                          fontSize: 20,
                          marginTop: 15
                        }}
                      >
                        อ่านต่อ
                      </Button>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        marginTop: 50,
                        justifyContent: "center"
                      }}
                    >
                      <ArrowBackIos
                        onClick={handleBack}
                        style={{
                          fontSize: 25,
                          color: "#00826a",
                          cursor: "pointer"
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          marginLeft: 40,
                          marginRight: 40,
                          alignItems: "center"
                        }}
                      >
                        {slides.map((x, i) => (
                          <div
                            onClick={() => handleStepChange(i)}
                            className={
                              i === activeStep
                                ? "bulletactive"
                                : "bulletinactive"
                            }
                          />
                        ))}
                      </div>

                      <ArrowForwardIos
                        onClick={handleNext}
                        style={{
                          fontSize: 25,
                          color: "#00826a",
                          cursor: "pointer"
                        }}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            ) : null}
          </div>
        ))}
      </SwipeableViews>
    </Grid>
  )
}

export default TestimonialCarousel
