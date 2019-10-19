import React from "react"
import Grid from "@material-ui/core/Grid"
import BlueTitleIcon from "../BlueTitleIcon"
import BannerBottom2 from "../BannerBottom2"
import Accordeon from "./Accordeon"

const Insuranceguidance = () => {
  return (
    <div>
      <Grid container justify="center" style={{ marginBottom: 120 }}>
        <Grid item md={8} sm={11} xs={12}>
          <BlueTitleIcon
            text="INSURANCE GUIDANCE"
            icon="/images/icons/international/6.png"
          />
          <div>
            <h2 style={{ color: "#4d4c4c" }}>Health Insurance</h2>
            <div>
              Other than extensive care from expertise team, cost is relatively
              important. Our patients for more than 50 nationalities from
              difference countries who prefer to use medical insurance for their
              medical expenses. Our coordinator will assist the patient to
              contact insurance providers for guarantee payment on their
            </div>
          </div>
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ color: "#4d4c4c" }}>Tip for an Easier Fast</h2>
            <div>
              The Health Insurance Policyholders are recommended to contact your
              insurance provider in order to check your benefits, coverage and
              authorize before receiving medical service. The patient may
              enquire the insurance to contact us directly at
              onestop@phyathai.com and we will provide necessary medical
              information by fastest mean.
            </div>
          </div>
          <Accordeon />
        </Grid>
      </Grid>

      <BannerBottom2 />
    </div>
  )
}

export default Insuranceguidance
