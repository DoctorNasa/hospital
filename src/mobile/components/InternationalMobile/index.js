import React, { useEffect } from "react"
import Homepage from "./Homepage"
import Menu from "./Menu"
import CorporatePartners from "./CorporatePartners"
import CorporateRepresentative from "./CorporateRepresentative"
import Insuranceguidance from "./Insuranceguidance"
import Insurances from "./Insurances"
import MedicalCenter from "./MedicalCenter"
import RelationCenter from "./RelationCenter"
import Marketing from "./Marketing"

const styles = {
  container: {
    padding: "70px 0px 0px 0px"
  }
}

const InternationalMobile = ({ queries }) => {
  useEffect(() => window.scrollTo(0, 0), [])

  if (
    Object.entries(queries).length === 0 ||
    (!queries.marketing &&
      !queries.relationcenter &&
      !queries.medicalcenter &&
      !queries.corporatepartners &&
      !queries.corporaterepresentative &&
      !queries.insurances &&
      !queries.insuranceguidance)
  )
    return <Homepage />

  return (
    <div style={styles.container}>
      <Menu queries={queries} />

      {queries.marketing && <Marketing />}
      {queries.relationcenter && <RelationCenter />}
      {queries.medicalcenter && <MedicalCenter />}
      {queries.corporatepartners && <CorporatePartners />}
      {queries.corporaterepresentative && <CorporateRepresentative />}
      {queries.insurances && <Insurances />}
      {queries.insuranceguidance && <Insuranceguidance />}
    </div>
  )
}

export default InternationalMobile
