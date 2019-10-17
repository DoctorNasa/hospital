import React from "react"
import Grid from "@material-ui/core/Grid"
import BlueTitleIcon from "../BlueTitleIcon"
import Tableau from "./Tableau"

const CorporatePartners = () => {
  return (
    <div>
      <Grid container justify="center">
        <Grid item md={8} sm={11} xs={12}>
          <BlueTitleIcon
            text="LIST OF CORPORATE PARTNERS"
            icon="/images/icons/international/4.png"
          />
          <div>
            Phyathai 2 International Hospital has been serving many
            international patients from numerous corporations such as embassies,
            airlines and chambers. We work with these companies in order to
            convenience their employees and covering expatriates or tourists who
            are under our corporate partners. We earn trust from these
            well-known organizations meantime; we are continually developing our
            capability to serve our corporate partners and clients.
          </div>
          <div>Lists of Corporate Airline</div>
          <Tableau />
          <div>Lists of Corporate Airline</div>
          <Tableau />
        </Grid>
      </Grid>
      <div
        style={{
          backgroundImage: 'url("/images/international/04.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: 400
        }}
      >
        fff
      </div>
    </div>
  )
}

export default CorporatePartners
