import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import "./styles.css"
import BreadCrumb from "../BreadCrumb"
import TitleDiv from "../TitleDiv"
import ZSearchBar from "../ZSearchBar"
import ZDropDown from "../ZDropDown"
import TitlesSection from "./TitlesSection"
import ZSimpleCarousel from "../ZSimpleCarousel"
import BlockSection from "./BlockSection"
import BtnLeftPanel from "./BtnLeftPanel"
import BlockBooking from "./BlockBooking"
import Success from "./Success"
import { useSpring, animated } from "react-spring"

const styles = {
  container: {
    marginTop: 30,
    marginLeft: 16,
    marginRight: 16,
    overflow: "hidden"
  },
  bgColored: {
    paddingTop: 30,
    background: "#cbefef"
  },
  bgUncolored: {
    paddingTop: 30
  },
  bookingContainer: {
    background: "white",
    width: "100%",
    padding: 30
  }
}

const DoctorSelect = ({ queries }) => {
  const [success, setSuccess] = useState(false)

  const _success = () => setSuccess(true)
  const { x } = useSpring({
    from: { x: 0 },
    x: queries.booking ? 1 : 0,
    config: { duration: 1000 }
  })
  if (success) return <Success />

  return (
    <Grid
      container
      justify="center"
      style={queries.booking ? styles.bgColored : styles.bgUncolored}
    >
      <Grid item md={10} sm={12}>
        <Grid container>
          <Grid item sm={4}>
            <BreadCrumb
              paddingLeft={25}
              paddingTop={16}
              crumbs={[{ name: "หน้าหลัก", link: "/" }, { name: "ศูนย์หัวใจ" }]}
            />
            {queries.booking ? (
              <BtnLeftPanel queries={queries} />
            ) : (
              <div>
                <BtnLeftPanel queries={queries} />
                <TitleDiv text="ค้นหา...สื่อวิดีโอหรือบทความสุขภาพ" />
                <ZSearchBar padding={16} noTitle />
                <TitleDiv text="เลือกโรงพยาบาล" />
                <ZDropDown margin={16} />
                <TitleDiv text="เลือกศูนย์การแพทย์" />
                <ZDropDown margin={16} />
              </div>
            )}
          </Grid>
          {queries.booking ? (
            <Grid item sm={8}>
              <animated.div
                style={{
                  opacity: x.interpolate({ range: [0, 1], output: [0, 1] })
                }}
              >
                <BlockBooking _success={_success} />
              </animated.div>
            </Grid>
          ) : (
            <Grid item sm={8}>
              <h1 style={{ color: "#4d4d4d", padding: 16 }}>
                แพคเกจและโปรโมชั่น
              </h1>

              <div style={styles.container}>
                <TitlesSection text="ในเครือพญาไททั้งหมด" />
                <ZSimpleCarousel />
              </div>
              <BlockSection title="โรงพยาบาล พญาไท 1" />
              <BlockSection title="โรงพยาบาล พญาไท 2" />
              <BlockSection title="โรงพยาบาล พญาไท 3" />
              <BlockSection title="โรงพยาบาล พญาไท ศรีราชา" />
              <BlockSection title="โรงพยาบาล พญาไท นวมินทร์" noDivider />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DoctorSelect
