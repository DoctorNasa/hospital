import React from "react"
import { useTheme } from "@material-ui/core/styles"
import SwipeableViews from "react-swipeable-views"
import Grid from "@material-ui/core/Grid"
import ArrowBackIos from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"
import Avatar from "@material-ui/core/Avatar"
import TitleH3 from "../TitleH3"

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

const styles = {
  itemContainerUnactive: {
    flex: 1,
    textAlign: "center"
  },
  itemContainerActive: {
    flex: 1,
    textAlign: "center"
  }
}

const CardsCarousel = ({ backgroundImg }) => {
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
    if (activeStep === 0) return setActiveStep(2)
  }

  const handleStepChange = step => {
    setActiveStep(step)
  }

  return (
    <Grid container justify="center">
      <Grid item sm={8} style={{ marginTop: 50 }}>
        <TitleH3
          text={"บทความใหม่ล่าสุด"}
          style={{ width: "100%", textAlign: "center", fontSize: 25 }}
        />
        <div>top content</div>
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
              top: 50,
              bottom: 50,
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
              top: 50,
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
            {slides.map(({ imgPath, title, subtitle }, index) => (
              <div key={index}>
                {Math.abs(activeStep - index) <= slides.length - 1 ? (
                  <div style={{ display: "flex" }}>
                    <div style={styles.itemContainerUnactive}>
                      <img
                        src="/images/icons/icon-doctor-1.jpg"
                        style={{ width: 100, height: 100, borderRadius: "50%" }}
                      />
                    </div>
                    <div style={styles.itemContainerUnactive}>
                      <img
                        src="/images/icons/icon-doctor-1.jpg"
                        style={{ width: 100, height: 100, borderRadius: "50%" }}
                      />
                    </div>
                    <div style={styles.itemContainerUnactive}>
                      <img
                        src="/images/icons/icon-doctor-1.jpg"
                        style={{ width: 100, height: 100, borderRadius: "50%" }}
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </SwipeableViews>
          <div style={{ width: "100%", textAlign: "center" }}>
            {/* <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{
                color: "white",
                fontSize: 20,
                marginTop: 15
              }}
            >
              ดูทั้งหมด
            </Button> */}
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

export default CardsCarousel
