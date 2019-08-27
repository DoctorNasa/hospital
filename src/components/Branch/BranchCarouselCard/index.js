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
import ItemCardCarousel from "./ItemCardCarousel"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const slides = [
  {
    id: 1,
    items: [
      {
        title: "title 1",
        subtitle: "subtitle 1",
        desc: "วางใจให้แพทย์เฉพาะทางผู้มีประสบการณ์และ ความชำนาญดูแลคุณ",
        icon: "icon",
        backgroundColor: "#f37a6f",
        iconUrl: "/images/branch/iconcard1.png"
      },
      {
        title: "title 2",
        subtitle: "subtitle 2",
        desc: "สามารถให้บริการรักษาพยาบาลด้วยเทคโนโลยี ระดับสูง ให้บริการในระด",
        icon: "icon",
        backgroundColor: "#fcb040",
        iconUrl: "/images/branch/iconcard2.png"
      },
      {
        title: "title 3",
        subtitle: "subtitle 3",
        desc: "ห้องพักในระหว่างการรักษาตัว คุณสามารถ เลือกราคาที่เหมาะสมกับคุณ",
        icon: "icon",
        backgroundColor: "#47a6dc",
        iconUrl: "/images/branch/iconcard3.png"
      }
    ]
  },
  {
    id: 2,
    items: [
      {
        title: "title 4",
        subtitle: "subtitle 4",
        desc: "วางใจให้แพทย์เฉพาะทางผู้มีประสบการณ์และ ความชำนาญดูแลคุณ",
        icon: "icon",
        backgroundColor: "#f37a6f",
        iconUrl: "/images/branch/iconcard1.png"
      },
      {
        title: "title 5",
        subtitle: "subtitle 5",
        desc: "สามารถให้บริการรักษาพยาบาลด้วยเทคโนโลยี ระดับสูง ให้บริการในระด",
        icon: "icon",
        backgroundColor: "#fcb040",
        iconUrl: "/images/branch/iconcard2.png"
      },
      {
        title: "title 6",
        subtitle: "subtitle 6",
        desc: "ห้องพักในระหว่างการรักษาตัว คุณสามารถ เลือกราคาที่เหมาะสมกับคุณ",
        icon: "icon",
        backgroundColor: "#47a6dc",
        iconUrl: "/images/branch/iconcard3.png"
      }
    ]
  }
]

const styles = {
  containerBrowser: {
    position: "relative",
    marginTop: "-15vh",
    zIndex: 99
  },
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

const BranchCarouseCard = ({ backgroundImg }) => {
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
      <Grid item sm={8} style={styles.containerBrowser}>
        <div>
          <div
            style={{
              position: "relative"
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
                top: 100,
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
                top: 100,
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
              {slides.map((x, index) => (
                <div key={x.id}>
                  {Math.abs(activeStep - index) <= slides.length - 1 ? (
                    <div style={{ padding: 20 }}>
                      <Grid container spacing={4}>
                        {x.items.map(y => (
                          <ItemCardCarousel
                            title={y.title}
                            subtitle={y.subtitle}
                            desc={y.desc}
                            iconUrl={y.iconUrl}
                            backgroundColor={y.backgroundColor}
                          />
                        ))}
                      </Grid>
                    </div>
                  ) : null}
                </div>
              ))}
            </SwipeableViews>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

export default BranchCarouseCard
