import React from "react"
import DescriptionTop from "./DescriptionTop"
import PriceTable from "./PriceTable"
import DescriptionRoom from "./DescriptionRoom"
import ZCardsAccommodations from "../../ZCardsAccommodations"
import BtnBlue from "../../BtnBlue"

const styles = {
  container: {
    paddingTop: 70
  }
}

const Accomodations = ({ match }) => {
  return (
    <div style={styles.container}>
      <img
        src="/images/mobile/accommodation-banner.jpg"
        style={{ width: "100%" }}
      />
      <DescriptionTop title={"Prestige-VIP (1565)"} />
      <div style={{ background: "#f3f3f3", paddingBottom: 30 }}>
        <PriceTable />
        <DescriptionRoom />
      </div>
      <ZCardsAccommodations match={match} />
      <BtnBlue textAlign="center" text="ดูทั้งหมด" />
    </div>
  )
}

export default Accomodations
