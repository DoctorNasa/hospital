import React from "react"
import TitlesSection from "./TitlesSection"
import Item from "./Item"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"

const BlockSection = ({ title, noDivider }) => {
  return (
    <div style={{ marginTop: 30 }}>
      <TitlesSection marginLeft={16} marginRight={16} text={title} />
      <div
        style={{
          display: "flex",
          marginTop: 15
        }}
      >
        <Item
          img="/images/doctor-select.jpg"
          text="คลินิก ศูนย์เวชศาสตร์ชะลอวัย โรงพยาบาล พญาไท 2"
        />
        <Item
          img="/images/doctor-select.jpg"
          text="คลินิก ศูนย์เวชศาสตร์ชะลอวัย โรงพยาบาล พญาไท 2"
        />
        <Item
          img="/images/doctor-select.jpg"
          text="คลินิก ศูนย์เวชศาสตร์ชะลอวัย โรงพยาบาล พญาไท 2"
        />
      </div>
      <div style={{ textAlign: "center", marginBottom: 50 }}>
        <Button variant="outlined" color="secondary" size="large">
          ดูแพคเกจทั้งหมด
        </Button>
      </div>
      {!noDivider && <Divider />}
    </div>
  )
}

export default BlockSection
