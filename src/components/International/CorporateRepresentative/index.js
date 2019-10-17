import React from "react"
import Grid from "@material-ui/core/Grid"
import BlueTitleIcon from "../BlueTitleIcon"

const CorporateRepresentative = () => {
  return (
    <div>
      <Grid container justify="center">
        <Grid item md={8} sm={11} xs={12}>
          <BlueTitleIcon
            text="LIST OF CORPORATE REPRESENTATIVE"
            icon="/images/icons/international/4.png"
          />
          <div>
            Monaliza Medical CO., LTD – For Medical Care Overseas,
            Kuwait/Bangkok
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CorporateRepresentative
