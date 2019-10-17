import React from "react"
import Grid from "@material-ui/core/Grid"
import BlueTitleIcon from "../BlueTitleIcon"

const RelationCenter = () => {
  return (
    <div>
      <Grid container justify="center">
        <Grid item md={8} sm={11} xs={12}>
          <BlueTitleIcon
            text="INTERNATIONAL RELATION CENTER"
            icon="/images/icons/international/2.png"
          />
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
              <b>Our International Marketing team</b> has created scopes for
              both groups who seeks for medical treatment and who seeks for an
              opportunity to promote our services to their region as
              facilitators. Phyathai Hospital's International Marketing
              Department provides the marketing material supports to the
              facilitators. You may contact our International Marketing Managers
              if you require any information from them according to their
              respective region of work.
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <h1>PICTURE</h1>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1, textAlign: "center" }}>
              <h1>PICTURE</h1>
            </div>
            <div style={{ flex: 1 }}>
              <b>Our International Marketing team</b> has created scopes for
              both groups who seeks for medical treatment and who seeks for an
              opportunity to promote our services to their region as
              facilitators. Phyathai Hospital's International Marketing
              Department provides the marketing material supports to the
              facilitators. You may contact our International Marketing Managers
              if you require any information from them according to their
              respective region of work.
            </div>
          </div>
        </Grid>
      </Grid>
      <div
        style={{
          backgroundImage: 'url("/images/international/02.jpg")',
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

export default RelationCenter
