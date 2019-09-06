import React, { useState } from "react"
import { useTheme } from "@material-ui/core/styles"
import SwipeableViews from "react-swipeable-views"
import Grid from "@material-ui/core/Grid"
import ArrowBackIos from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"
import Avatar from "@material-ui/core/Avatar"
import TitleH3 from "../TitleH3"
import BtnBlue from "../BtnBlue"

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
  containerImg: {
    flex: 1,
    textAlign: "center"
  },
  img: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: "50%",
    cursor: "pointer"
  },
  imgActive: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: "50%",
    cursor: "pointer",
    boxShadow: "0px 0px 21px -2px rgba(50,191,198,1)"
  }
}

const CardsCarousel = ({ backgroundImg }) => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const [selectedDoctor, setSelectedDoctor] = useState(1)

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

  const _selectDoctor = idDoctor => {
    setSelectedDoctor(idDoctor)
  }

  return (
    <Grid container justify="center">
      <Grid item sm={8} style={{ marginTop: 50, marginBottom: 50 }}>
        <TitleH3
          text={"บทความใหม่ล่าสุด"}
          style={{ width: "100%", textAlign: "center", fontSize: 25 }}
        />
        <div style={{ width: "100%", display: "flex" }}>
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={`/images/icons/icon-doctor-${selectedDoctor}.jpg`}
              style={{ width: "70%" }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#00826a", fontWeight: "bold", fontSize: 20 }}>
              พญ.วริศรา รุทระวณิช
            </div>
            <div style={{ paddingTop: 15, paddingBottom: 15 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <div>
                <img
                  style={{ height: 50 }}
                  src="/images/icons/calendar-icon.png"
                />
              </div>
              <div>
                <BtnBlue text="นัดหมายแพทย์" />
              </div>
            </div>
          </div>
        </div>
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
                    <div style={styles.containerImg}>
                      <img
                        src="/images/icons/icon-doctor-1.jpg"
                        style={
                          selectedDoctor === 1 ? styles.imgActive : styles.img
                        }
                        onClick={() => _selectDoctor(1)}
                      />
                    </div>
                    <div style={styles.containerImg}>
                      <img
                        src="/images/icons/icon-doctor-2.jpg"
                        style={
                          selectedDoctor === 2 ? styles.imgActive : styles.img
                        }
                        onClick={() => _selectDoctor(2)}
                      />
                    </div>
                    <div style={styles.containerImg}>
                      <img
                        src="/images/icons/icon-doctor-3.jpg"
                        style={
                          selectedDoctor === 3 ? styles.imgActive : styles.img
                        }
                        onClick={() => _selectDoctor(3)}
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
