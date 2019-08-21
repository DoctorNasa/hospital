import React, { useState } from "react"
import Carousel from "react-spring-3d-carousel"
import uuidv4 from "uuid"
import { config } from "react-spring"
import Button from "@material-ui/core/Button"
import DotsCarousel from "../DotsCarousel"

const slidStyle = url => ({
  backgroundImage: `url(${url})`,
  backgroundRepeat: "no-repeat",
  height: 400,
  width: 250,
  marginLeft: -30,
  marginRight: -30,
  backgroundSize: "100% 80%",
  zIndex: -10
})

const styles = {
  backgroundImg: {
    position: "absolute",
    right: 0,
    top: -"10%",
    width: "100%"
  }
}

const slideItem = (
  <div style={slidStyle("/images/itemPackageCarousel.png")}>
    <p
      style={{
        marginTop: 100,
        fontSize: 18,
        textAlign: "center"
      }}
    >
      โปรแกรมวัคซีนป้องกัน <br /> มะเร็งปากมดลูก
    </p>
    <div style={{ textAlign: "center" }}>
      <Button
        variant="contained"
        color="secondary"
        style={{
          color: "white",
          height: 50,
          marginTop: 10,
          marginRight: 50,
          marginLeft: 50
        }}
      >
        ดูรายละเอียด
      </Button>
    </div>
  </div>
)

const slides = [
  {
    key: uuidv4(),
    content: slideItem
  },
  {
    key: uuidv4(),
    content: slideItem
  },
  {
    key: uuidv4(),
    content: slideItem
  },
  {
    key: uuidv4(),
    content: slideItem
  },
  {
    key: uuidv4(),
    content: slideItem
  },
  {
    key: uuidv4(),
    content: slideItem
  },
  {
    key: uuidv4(),
    content: slideItem
  },
  {
    key: uuidv4(),
    content: slideItem
  }
]

const PackagesCarousel = () => {
  const [goToSlide, setGoToSlide] = useState(0)

  const handleStepChange = slide => setGoToSlide(slide)

  return (
    <div style={{ marginTop: 20 }}>
      <img src="/images/background3.png" style={styles.backgroundImg} />

      <div
        style={{
          width: "70%",
          height: "200px",
          margin: "0 auto",
          position: "relative",
          paddingBottom: 200
        }}
      >
        <div
          style={{
            marginBottom: 120,
            width: "100%",
            textAlign: "center"
          }}
        >
          <div style={{ fontSize: 25, color: "#4d4d4d", fontWeight: 600 }}>
            บทความสำหรับคุณ
          </div>
          <div style={{ color: "#818385" }}>
            เลือกแพคเกจและโปรโมชั่นที่คุณสนใจ
          </div>
        </div>

        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={2}
          animationConfig={config.slow}
        />
      </div>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: -20, zIndex: 99 }} />
        <DotsCarousel
          handleStepChange={handleStepChange}
          slidesLength={slides.length}
          activeIndex={goToSlide}
          marginTop={30}
          marginBottom={30}
        />
      </div>
    </div>
  )
}

export default PackagesCarousel