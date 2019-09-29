import React from "react"
import TitlePackageCategory from "../../Titles/TitlePackageCategory"
import Card from "./Card"

const CorporatePartners = () => {
  return (
    <div style={{ margin: "15px 0px 0px 0px" }}>
      <TitlePackageCategory
        text="LIST OF CORPORATE REPRESENTATIVE"
        img="/images/icons/international/4.png"
        color="rgb(50, 191, 198)"
        padding="15px 15px 15px 15px"
      />
      <div style={{ margin: "0px 15px 30px 15px" }}>
        Monaliza Medical CO., LTD – For Medical Care Overseas, Kuwait/
      </div>
      <Card img="/images/mobile/card1.jpg" />
    </div>
  )
}

export default CorporatePartners
