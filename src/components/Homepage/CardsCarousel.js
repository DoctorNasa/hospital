import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { isBrowser, isMobile, isTablet } from "react-device-detect"
import SwipeableViews from "react-swipeable-views"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import { autoPlay } from "react-swipeable-views-utils"
import ArrowBackIos from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const slideBrowser1 = [
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

const slideMobile1 = {
  imgPath: "/images/cardCarousel.png",
  title: "Hidden Hunger ภาวะขาดวิตามิน ที่คุณอาจเป็น...แต่ไม่เคยรู้ตัว",
  subtitle: "จากการศึกษาของ WHO หรือองค์กรอนามัยโลก พบว่าพฤติกรรมการรับประทา"
}

const slideMobile2 = {
  imgPath: "/images/cardCarousel.png",
  title: "Hidden Hunger ภาวะขาดวิตามิน ที่คุณอาจเป็น...แต่ไม่เคยรู้ตัว #1",
  subtitle: "จากการศึกษาของ WHO หรือองค์กรอนามัยโลก พบว่าพฤติกรรมการรับประทา #1"
}

const slideMobile3 = {
  imgPath: "/images/cardCarousel.png",
  title: "Hidden Hunger ภาวะขาดวิตามิน ที่คุณอาจเป็น...แต่ไม่เคยรู้ตัว #2",
  subtitle: "จากการศึกษาของ WHO หรือองค์กรอนามัยโลก พบว่าพฤติกรรมการรับประทา #2"
}

const slidesBrowser = slideBrowser1
const slidesMobile = [slideMobile1, slideMobile2, slideMobile3]

const styles = {
  item: {
    background: "#f2bd61",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.45)"
  },
  itemDesc: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  backgroundImg: {
    position: "absolute",
    zIndex: -1,
    width: window.innerWidth / 2,
    height: 650,
    left: "-25%",
    top: "23%"
  }
}

const CardsCarousel = ({ backgroundImg }) => {
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
    <Grid item md={8} sm={12}>
      <div style={{ marginTop: 50 }}>
        <h3 style={{ width: "100%", textAlign: "center", fontSize: 25 }}>
          บทความใหม่ล่าสุด
        </h3>
        <div
          style={{
            position: "relative",
            marginTop: 50
          }}
        >
          {backgroundImg && (
            <img src="/images/background2.png" style={styles.backgroundImg} />
          )}
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
            {slidesBrowser.map((slide, index) => (
              <div key={slide.title}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <div style={{ padding: 20 }}>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={4}>
                        <div style={styles.item}>
                          <img style={{ width: "100%" }} src={slide.imgPath} />
                          <div style={styles.itemDesc}>
                            <h4>{slide.title}</h4>
                            <div>{slide.subtitle}</div>
                            <div style={{ marginTop: 30 }}>
                              <b>Created Date: </b>01/07/2019
                            </div>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <div style={styles.item}>
                          <img style={{ width: "100%" }} src={slide.imgPath} />
                          <div style={styles.itemDesc}>
                            <h4>{slide.title}</h4>
                            <div>{slide.subtitle}</div>
                            <div style={{ marginTop: 30 }}>
                              <b>Created Date: </b>01/07/2019
                            </div>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <div style={styles.item}>
                          <img style={{ width: "100%" }} src={slide.imgPath} />
                          <div style={styles.itemDesc}>
                            <h4>{slide.title}</h4>
                            <div>{slide.subtitle}</div>
                            <div style={{ marginTop: 30 }}>
                              <b>Created Date: </b>01/07/2019
                            </div>
                          </div>
                        </div>
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
    </Grid>
  )
}

export default CardsCarousel
