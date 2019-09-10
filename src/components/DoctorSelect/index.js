import React from "react"
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
  return (
    <Grid
      container
      justify="center"
      style={queries.booking ? styles.bgColored : styles.bgUncolored}
    >
      <Grid item sm={10}>
        <Grid container spacing={4}>
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
            <BlockBooking />
          ) : (
            <Grid item sm={8}>
              <Grid item sm={6}>
                <h1 style={{ color: "#4d4d4d", padding: 16 }}>
                  แพคเกจและโปรโมชั่น
                </h1>
              </Grid>

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
