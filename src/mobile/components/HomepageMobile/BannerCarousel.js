import React, { useState } from "react"
import { useTheme } from "@material-ui/core/styles"
import SwipeableViews from "react-swipeable-views"
import BtnBlue from "../BtnBlue"
import { autoPlay } from "react-swipeable-views-utils"
import DotsCarousel from "../DotsCarousel"
import { useMediaQuery } from "react-responsive"

const styles = {
  bannerBg: {
    backgroundImage: 'url("/images/mobile/homepage-banner.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% calc((9/16)*160vw)",
    backgroundAttachment: "fixed",
    height: "calc((9/16)*150vw)"
  },
  containerMobile: {
    marginRight: 10,
    marginLeft: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top-left"
  },
  subcontainerNormal: {
    position: "relative",
    height: 280,
    width: "100%"
  },
  subcontainerNormal: {
    position: "relative",
    height: 280,
    width: "100%"
  }
}

const AutoPlaySwipeableViews = SwipeableViews

const slides = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "/images/mobile/img-banner.jpg"
  },
  {
    label: "Bird",
    imgPath: "/images/mobile/img-banner.jpg"
  },
  {
    label: "Bali, Indonesia",
    imgPath: "/images/mobile/img-banner.jpg"
  }
]

function BannerCarousel() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStepChange = x => {
    setActiveStep(x)
  }

  return (
    <div style={{ paddingBottom: 15 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {slides.map((x, index) => (
          <div key={x.label}>
            <div style={styles.bannerBg} />
            <div
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              style={styles.containerMobile}
            >
              <img
                src="/images/mobile/white-wave.png"
                style={{
                  position: "absolute",
                  width: "100%",
                  top: "calc((9/16)*90vw)",
                  zIndex: 0
                }}
              />
              <div style={styles.subcontainerNormal}>
                <div
                  style={{
                    position: "absolute",
                    zIndex: 1,
                    textAlign: "center"
                  }}
                >
                  <h1
                    style={{
                      textAlign: "center",
                      color: "#4d4d4d",
                      marginTop: 0,
                      marginBottom: 0
                    }}
                  >
                    {window.innerWidth}ครอบครัวมีความสุขหยุด
                    ทุกอาการป่วยช่วยให้คุณไปต่อ
                  </h1>
                  <h2
                    style={{
                      color: "grey",
                      textAlign: "center",
                      color: "#818385",
                      marginTop: 0,
                      marginBottom: 0
                    }}
                  >
                    เริ่มเปลี่ยนตัวเองให้เป็นคนใหม่ ให้พญาไทยดูแลคุณ
                  </h2>
                  <BtnBlue text="ดูรายละเอียดเพิ่มเติม" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <DotsCarousel
        color="#71c6a2"
        handleStepChange={handleStepChange}
        slidesLength={slides.length}
        activeIndex={activeStep}
      />
    </div>
  )
}

export default BannerCarousel
