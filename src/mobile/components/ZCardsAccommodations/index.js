import React, { useState } from "react"
import { useTheme } from "@material-ui/core/styles"
import SwipeableViews from "react-swipeable-views"
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"
import { autoPlay } from "react-swipeable-views-utils"
import DotsCarousel from "../DotsCarousel"
import ItemAccommodation from "./ItemAccommodation"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const slides = [
  {
    imgPath: "/images/mobile/accommodations-room.jpg",
    title: "Prestige-VIP (1565)",
    price: "22,610"
  },
  {
    imgPath: "/images/mobile/accommodations-room.jpg",
    title: "Super Deluxe (1553,1566)",
    price: "22,610"
  },
  {
    imgPath: "/images/mobile/accommodations-room.jpg",
    title: "Prestige-Deluxe (1557,1564)",
    price: "22,610"
  }
]

const ZCardsAccommodations = ({ match }) => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)

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
        {slides.map(({ imgPath, title, price }, index) => (
          <ItemAccommodation
            key={index}
            imgPath={imgPath}
            title={title}
            price={price}
            margin={"15px 15px 15px 15px"}
            link={`/accommodations/${match.params.branch}/${index}`}
          />
        ))}
      </AutoPlaySwipeableViews>
      <DotsCarousel
        handleStepChange={handleStepChange}
        slidesLength={slides.length}
        activeIndex={activeStep}
        marginTop={30}
      />
    </div>
  )
}

export default ZCardsAccommodations
