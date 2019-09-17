import React from "react"
import DescriptionTop from "./DescriptionTop"
import PriceTable from "./PriceTable"

const styles = {
  container: {
    paddingTop: 80
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
      <div style={{ background: "#f3f3f3" }}>
        <PriceTable />
      </div>
    </div>
  )
}

export default Accomodations
