import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import SwipeableViews from "react-swipeable-views"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import { autoPlay } from "react-swipeable-views-utils"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const slides = [
  {
    label: "1",
    imgPath: "/images/branch/branch-banner-bg.jpg",
    description: "ประสบการณ์การดูแลรักษาพยาบาลตลอดมามากกว่า 40 ปี 1"
  },
  {
    label: "2",
    imgPath: "/images/branch/branch-banner-bg.jpg",
    description: "ประสบการณ์การดูแลรักษาพยาบาลตลอดมามากกว่า 40 ปี 2"
  },
  {
    label: "3",
    imgPath: "/images/branch/branch-banner-bg.jpg",
    description: "ประสบการณ์การดูแลรักษาพยาบาลตลอดมามากกว่า 40 ปี 3"
  }
]

const useStyles = makeStyles(theme => ({
  img: {
    display: "block",
    width: "100%"
  },
  square: {
    width: "100%",
    maxWidth: 300,
    zIndex: 1
  },
  bulletInactive: {
    borderRadius: "50%",
    height: 15,
    width: 15,
    backgroundColor: "#00826a",
    opacity: 0.3,
    marginRight: 6,
    cursor: "pointer"
  },
  bulletActive: {
    borderRadius: "50%",
    height: 15,
    width: 15,
    backgroundColor: "#00826a",
    marginRight: 6
  }
}))

const BannerCarousel = ({ match }) => {
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = slides.length

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
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {slides.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div>
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />

                <Grid container justify="center">
                  <Grid item xs={8} style={{ marginTop: "-33%" }}>
                    <Grid container justify="flex-end">
                      <Grid item>
                        <div className={classes.square}>
                          <h1
                            style={{
                              fontSize: 35,
                              textTransform: "capitalize"
                            }}
                          >
                            {match.params.branch}
                          </h1>
                          <h2
                            style={{
                              color: "grey",
                              fontSize: 20,
                              marginTop: -15
                            }}
                          >
                            {step.description}
                          </h2>
                          <Box
                            display="flex"
                            flexDirection="row"
                            style={{ marginTop: 20 }}
                          >
                            {slides.map((x, i) => (
                              <div
                                onClick={() => handleStepChange(i)}
                                className={
                                  i === activeStep
                                    ? classes.bulletActive
                                    : classes.bulletInactive
                                }
                              />
                            ))}
                          </Box>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  )
}

export default BannerCarousel
