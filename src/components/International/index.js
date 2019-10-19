import React, { useEffect } from "react"
import Homepage from "./Homepage"
import Marketing from "./Marketing"
import Grid from "@material-ui/core/Grid"
import BreadCrumb from "../BreadCrumb"
import Menu from "./Menu"
import RelationCenter from "./RelationCenter"
import MedicalCenter from "./MedicalCenter"
import CorporatePartners from "./CorporatePartners"
import CorporateRepresentative from "./CorporateRepresentative"
import Insurances from "./Insurances"
import Insuranceguidance from "./Insuranceguidance"

const International = ({ queries }) => {
  useEffect(() => window.scrollTo(0, 0), [queries])

  if (Object.entries(queries).length === 0) return <Homepage />

  return (
    <div style={{ paddingTop: 30 }}>
      <Grid container justify="center">
        <Grid item md={8} sm={11} xs={12}>
          <BreadCrumb
            paddingTop={16}
            paddingBottom={16}
            crumbs={[
              { name: "International Patients", link: "/international" },
              { name: "International Marketing" }
            ]}
          />
          <Menu queries={queries} />
        </Grid>
      </Grid>
      <div style={{ paddingTop: 30 }}>
        {queries.marketing && <Marketing queries />}
        {queries.relationcenter && <RelationCenter queries />}
        {queries.medicalcenter && <MedicalCenter />}
        {queries.corporatepartners && <CorporatePartners />}
        {queries.corporaterepresentative && <CorporateRepresentative />}
        {queries.insurances && <Insurances />}
        {queries.insuranceguidance && <Insuranceguidance />}
      </div>
    </div>
  )
}

export default International
