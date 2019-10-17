import React from "react"
import Grid from "@material-ui/core/Grid"
import BlueTitleIcon from "../BlueTitleIcon"

const Insuranceguidance = () => {
  return (
    <div>
      <Grid container justify="center">
        <Grid item md={8} sm={11} xs={12}>
          <BlueTitleIcon
            text="INSURANCE GUIDANCE"
            icon="/images/icons/international/6.png"
          />
          <div>
            <div>Health Insurance</div>
            <div>
              Other than extensive care from expertise team, cost is relatively
              important. Our patients for more than 50 nationalities from
              difference countries who prefer to use medical insurance for their
              medical expenses. Our coordinator will assist the patient to
              contact insurance providers for guarantee payment on their
            </div>
          </div>
          <div>
            <div>Tip for an Easier Fast</div>
            <div>
              The Health Insurance Policyholders are recommended to contact your
              insurance provider in order to check your benefits, coverage and
              authorize before receiving medical service. The patient may
              enquire the insurance to contact us directly at
              onestop@phyathai.com and we will provide necessary medical
              information by fastest mean.
            </div>
          </div>
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

export default Insuranceguidance
