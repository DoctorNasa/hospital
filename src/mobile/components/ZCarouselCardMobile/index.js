import React, { useState } from "react"
import { useTheme } from "@material-ui/core/styles"
import SwipeableViews from "react-swipeable-views"
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"
import { autoPlay } from "react-swipeable-views-utils"
import DotsCarousel from "../DotsCarousel"
import ItemCardCarousel from "./ItemCardCarousel"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const slides = [
  {
    id: 1,
    title: "title 1",
    subtitle: "subtitle 1",
    desc: "วางใจให้แพทย์เฉพาะทางผู้มีประสบการณ์และ ความชำนาญดูแลคุณ",
    icon: "icon",
    backgroundColor: "#f37a6f",
    iconUrl: "/images/branch/iconcard1.png"
  },
  {
    id: 2,
    title: "title 2",
    subtitle: "subtitle 2",
    desc: "สามารถให้บริการรักษาพยาบาลด้วยเทคโนโลยี ระดับสูง ให้บริการในระด",
    icon: "icon",
    backgroundColor: "#fcb040",
    iconUrl: "/images/branch/iconcard2.png"
  },
  {
    id: 3,
    title: "title 3",
    subtitle: "subtitle 3",
    desc: "ห้องพักในระหว่างการรักษาตัว คุณสามารถ เลือกราคาที่เหมาะสมกับคุณ",
    icon: "icon",
    backgroundColor: "#47a6dc",
    iconUrl: "/images/branch/iconcard3.png"
  },
  {
    id: 4,
    title: "title 4",
    subtitle: "subtitle 4",
    desc: "วางใจให้แพทย์เฉพาะทางผู้มีประสบการณ์และ ความชำนาญดูแลคุณ",
    icon: "icon",
    backgroundColor: "#f37a6f",
    iconUrl: "/images/branch/iconcard1.png"
  },
  {
    id: 5,
    title: "title 5",
    subtitle: "subtitle 5",
    desc: "สามารถให้บริการรักษาพยาบาลด้วยเทคโนโลยี ระดับสูง ให้บริการในระด",
    icon: "icon",
    backgroundColor: "#fcb040",
    iconUrl: "/images/branch/iconcard2.png"
  },
  {
    id: 6,
    title: "title 6",
    subtitle: "subtitle 6",
    desc: "ห้องพักในระหว่างการรักษาตัว คุณสามารถ เลือกราคาที่เหมาะสมกับคุณ",
    icon: "icon",
    backgroundColor: "#47a6dc",
    iconUrl: "/images/branch/iconcard3.png"
  }
]

function CardsCarousel() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)

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
    <div style={{ paddingTop: 20 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {slides.map((x, index) => (
          <div key={x.id}>
            <ItemCardCarousel
              title={x.title}
              subtitle={x.subtitle}
              desc={x.desc}
              iconUrl={x.iconUrl}
              backgroundColor={x.backgroundColor}
            />
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <DotsCarousel
        handleStepChange={handleStepChange}
        slidesLength={slides.length}
        activeIndex={activeStep}
        marginTop={15}
      />
    </div>
  )
}

export default CardsCarousel
