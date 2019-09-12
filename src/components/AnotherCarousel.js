import React, { useState } from "react"
import { useTheme } from "@material-ui/core/styles"
import SwipeableViews from "react-swipeable-views"
import Grid from "@material-ui/core/Grid"
import { autoPlay } from "react-swipeable-views-utils"
import DotsCarousel from "./DotsCarousel"
import BtnBlue from "./BtnBlue"

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
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.45)"
  },
  container: {
    width: "100%",
    height: 600,
    zIndex: 90
  }
}

const CardsCarousel = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)

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
    <Grid item sm={12}>
      <div style={{ position: "relative" }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          style={{ width: "100%" }}
        >
          {slides.map((slide, index) => (
            <div key={slide.title}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Grid item sm={12} style={styles.container}>
                  <div
                    style={{
                      backgroundImage: `url(/images/anotherslideblock.png)`,
                      backgroundSize: "45% 500px",
                      backgroundRepeat: "no-repeat",
                      display: "flex"
                    }}
                  >
                    <div style={{ flex: 1 }} />
                    <Grid container>
                      <img
                        src="/images/bg-bubble.jpg"
                        style={{
                          position: "absolute",
                          zIndex: -90,
                          width: "100%",
                          height: 600
                        }}
                      />
                      <Grid item md={6} sm={4} />
                      <Grid item md sm>
                        <h3 style={{ fontSize: 25, fontWeight: 700 }}>
                          ศูนย์ทางการแพทย์
                        </h3>
                        <h4 style={{ fontSize: 20, fontWeight: 500 }}>
                          นวัตกรรมใหม่ 'Bi-h4lane DSA' <br />{" "}
                          รักษาหลอดเลือดสมองได้โดย ไม่ต้องผ่า
                        </h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable. If you are
                          going to use a passage of Lorem Ipsum, you need to be
                          sure there isn't anything embarrassing hidden in the
                          middle of text. All the Lorem Ipsum generators on the
                          Internet tend to repeat predefined chunks as
                          necessary, making this the first true generator on the
                          Internet. It uses a dictionary of over 200 Latin
                          words, combined with a handful of model sentence
                          structures, to generate Lorem Ipsum which looks
                          reasonable. The generated Lorem Ipsum is therefore
                          always free from repetition, injected humour, or
                          non-characteristic words etc
                        </p>
                        <DotsCarousel
                          handleStepChange={handleStepChange}
                          slidesLength={slides.length}
                          activeIndex={index}
                          marginTop={30}
                        />
                        <div
                          style={{
                            width: "100%",
                            textAlign: "center",
                            paddingTop: 30
                          }}
                        >
                          <BtnBlue text="ศูนย์ทางการแพทย์ทั้งหมด" fullWidth />
                        </div>
                      </Grid>
                      <Grid item md={2} sm={1} />
                    </Grid>
                  </div>
                </Grid>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </div>
    </Grid>
  )
}

export default CardsCarousel
