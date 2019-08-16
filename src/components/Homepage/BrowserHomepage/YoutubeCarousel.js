import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { isBrowser, isMobile, isTablet } from "react-device-detect"
import SwipeableViews from "react-swipeable-views"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import { autoPlay } from "react-swipeable-views-utils"
import VideoPlayer from "./VideoPlayer"
import ArrowBackIos from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"

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

const CardsCarousel = () => {
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
    <div style={{ marginTop: 50 }}>
      <h3 style={{ width: "100%", textAlign: "center", fontSize: 25 }}>
        บทความใหม่ล่าสุด
      </h3>
      <div style={{ position: "relative", marginTop: 50 }}>
        <ArrowBackIos
          onClick={handleBack}
          style={{
            fontSize: 50,
            color: "#00826a",
            position: "absolute",
            top: 150,
            bottom: 150,
            left: -50,
            cursor: "pointer"
          }}
        />
        <ArrowForwardIos
          onClick={handleNext}
          style={{
            fontSize: 50,
            color: "#00826a",
            position: "absolute",
            top: 150,
            right: -50,
            cursor: "pointer"
          }}
        />
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
                <div style={{ padding: 20 }}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <h3>{slide.title}</h3>
                      <p>{slide.desc}</p>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <VideoPlayer vidId={slide.vidId} />
                    </Grid>
                  </Grid>
                </div>
              ) : null}
            </div>
          ))}
        </SwipeableViews>
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
            something in thai
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardsCarousel
