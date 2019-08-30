import React, { useState } from "react"
import Carousel from "react-spring-3d-carousel"
import uuidv4 from "uuid"
import { config } from "react-spring"
import Button from "@material-ui/core/Button"
import ArrowBackIos from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"
import Grid from "@material-ui/core/Grid"

const slidStyle = url => ({
  backgroundImage: `url(${url})`,
  width: 300,
  height: 450,
  backgroundSize: "300px 450px",
  display: "flex",
  textAlign: "center",
  backgroundRepeat: "no-repeat",
  flexDirection: "column",
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
    <div
      style={{
        marginTop: 230,
        background: "white",
        height: "100%"
      }}
    >
      <p
        style={{
          paddingLeft: 40,
          paddingRight: 40,
          fontSize: 20
        }}
      >
        โปรแกรมวัคซีนป้องกัน <br /> มะเร็งปากมดลูก
      </p>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{
          color: "white",
          fontSize: 20,
          height: 50,
          marginTop: 30,
          marginRight: 60,
          marginLeft: 60
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
  const handleBack = () => setGoToSlide(goToSlide - 1)

  const handleNext = () => setGoToSlide(goToSlide + 1)

  return (
    <Grid item sm={8} xs={12}>
      <div>
        <img src="/images/background3.png" style={styles.backgroundImg} />

        <div
          style={{
            width: "100%",
            height: "500px",
            margin: "0 auto",
            position: "relative",
            marginBottom: 200
          }}
        >
          <ArrowBackIos
            onClick={handleBack}
            style={{
              fontSize: 50,
              color: "#00826a",
              position: "absolute",
              bottom: 150,
              left: -50,
              cursor: "pointer",
              zIndex: 99
            }}
          />
          <ArrowForwardIos
            onClick={handleNext}
            style={{
              fontSize: 50,
              color: "#00826a",
              position: "absolute",
              bottom: 150,
              right: -50,
              cursor: "pointer",
              zIndex: 99
            }}
          />
          <div
            style={{
              marginTop: 100,
              marginBottom: 40,
              width: "100%",
              textAlign: "center"
            }}
          >
            <h3 style={{ fontSize: "25px" }}>บทความสำหรับคุณ</h3>
            <p>เลือกแพคเกจและโปรโมชั่นที่คุณสนใจ</p>
          </div>

          <Carousel
            slides={slides}
            goToSlide={goToSlide}
            offsetRadius={4}
            animationConfig={config.slow}
          />
          <div style={{ width: "100%", textAlign: "center" }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{
                color: "white",
                fontSize: 20,
                height: 50
              }}
            >
              ดูแพคเกจและโปรโมชั่นทั้งหมด
            </Button>
          </div>
        </div>
      </div>
    </Grid>
  )
}

export default PackagesCarousel
