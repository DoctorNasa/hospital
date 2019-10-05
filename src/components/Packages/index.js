import React, { useEffect, useState, useRef } from "react"
import Pagination from "../Pagination"
import Grid from "@material-ui/core/Grid"
import "./styles.css"
import BreadCrumb from "../BreadCrumb"
import TitleDiv from "../TitleDiv"
import ZSearchBar from "../ZSearchBar"
import ZDropDown from "../ZDropDown"
import TitlesSection from "./TitlesSection"
import ZSimpleCarousel from "../ZSimpleCarousel"
import BlockSection from "./BlockSection"

const styles = {
  container: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    overflow: "hidden"
  }
}

const items = new Array(20).fill(1)

const Packages = ({ queries }) => {
  return (
    <Grid
      container
      justify="center"
      style={{ paddingTop: 30, marginBottom: 50 }}
    >
      <Grid item md={10} sm={12}>
        <Grid container>
          <Grid item sm={4}>
            <TitleDiv text="ค้นหา...สื่อวิดีโอหรือบทความสุขภาพ" />
            <ZSearchBar padding={16} noTitle />
            <TitleDiv text="เลือกโรงพยาบาล" />
            <ZDropDown margin={16} />
            <TitleDiv text="เลือกศูนย์การแพทย์" />
            <ZDropDown margin={16} />
          </Grid>
          <Grid item sm={8}>
            <BreadCrumb
              paddingLeft={16}
              paddingTop={16}
              crumbs={[
                { name: "หน้าหลัก", link: "/" },
                { name: "แพคเกจโปรโมชั่น", name: "ศูนย์หัวใจ" }
              ]}
            />
            <h1 style={{ color: "#4d4d4d", paddingLeft: 16 }}>
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
            <BlockSection title="โรงพยาบาล พญาไท นวมินทร์" />

            <Pagination currentPage={1} itemsLength={items.length} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Packages
