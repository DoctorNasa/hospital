import React from "react"
import Grid from "@material-ui/core/Grid"
import BlueTitleIcon from "../BlueTitleIcon"
import Cube from "./Cube"
import CubeContact from "./CubeContact"

const Marketing = () => {
  return (
    <Grid container justify="center" style={{ marginBottom: 120 }}>
      <Grid item md={8} sm={11} xs={12}>
        <BlueTitleIcon text="INTERNATIONAL MARKETING" />
        <div style={{ display: "flex" }}>
          <div style={{ margin: 15, minWidth: 250 }}>
            <b>Our International Marketing team</b> has created scopes for both
            groups who seeks for medical treatment and who seeks for an
            opportunity to promote our services to their region as facilitators.
            Phyathai Hospital's International Marketing Department provides the
            marketing material supports to the facilitators. You may contact our
            International Marketing Managers if you require any information from
            them according to their respective region of work.
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end"
            }}
          >
            <Cube
              image="/images/international/Pyathai1-1.jpg"
              title="PHYATHAI 1"
            />
            <Cube
              image="/images/international/Pyathai2-1.jpg"
              title="PHYATHAI 2"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexWrap: "wrap"
          }}
        >
          <CubeContact />
          <Cube
            image="/images/international/Pyathaisriracha-1.jpg"
            title="PHYATHAI SRIRACHA"
          />
          <Cube
            image="/images/international/PyathaiNAWamin-1.jpg"
            title="PHYATHAI NAWAMIN"
          />
          <Cube
            image="/images/international/Pyathai3-1.jpg"
            title="PHYATHAI 3"
          />
        </div>
        <div style={{ marginTop: 40 }}>
          Our International Marketing team has created scopes for both groups
          who seeks for medical treatment and who seeks for an oppertunity to
          promote our services to their region as facilitators. Phyathai
          Hospital's International Marketing Department provides the marketing
          material supports to the facilitators. You may contact our
          International Marketing Managers if you require any information from
          them according to their respective region of work.
        </div>
        <div style={{ marginTop: 80 }}>
          <img
            src="/images/international/Layer-547.jpg"
            style={{ width: "100%" }}
          />
        </div>
      </Grid>
    </Grid>
  )
}

export default Marketing
