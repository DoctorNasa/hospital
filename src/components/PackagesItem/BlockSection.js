import React from "react"
import TitlesSection from "./TitlesSection"
import PackageItem from "./PackageItem"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"

const BlockSection = ({ title }) => {
  return (
    <div style={{ marginTop: 30 }}>
      <TitlesSection marginLeft={16} marginRight={16} text={title} />
      <div
        style={{
          display: "flex",
          marginTop: 15
        }}
      >
        <PackageItem
          img="/images/carousel-heart.jpg"
          text="โปรแกรมตรวจ สุขภาพหัวใจ"
        />
        <PackageItem img="/images/carousel-heart.jpg" text="text1" />
        <PackageItem img="/images/carousel-heart.jpg" text="text1" />
      </div>
      <div style={{ textAlign: "center", marginTop: 50, marginBottom: 50 }}>
        <Button variant="outlined" color="secondary" size="large">
          ดูแพคเกจทั้งหมด
        </Button>
      </div>
      <Divider />
    </div>
  )
}

export default BlockSection
