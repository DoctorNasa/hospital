import React from "react"
import TitlePackageCategory from "../../Titles/TitlePackageCategory"
import Accordeon from "./Accordeon"

const InsuranceGuidance = () => {
  React.useEffect(() => window.scrollTo(0, 0), [])
  return (
    <div style={{ margin: "15px 0px -10px 0px" }}>
      <TitlePackageCategory
        text="INTERNATIONAL RELATION CENTER"
        img="/images/icons/international/6.png"
        color="rgb(50, 191, 198)"
        padding="15px 15px 15px 15px"
      />
      <div
        style={{
          color: "#4d4c4c",
          fontSize: 18,
          fontWeight: "bold",
          padding: "15px 15px 0px 15px"
        }}
      >
        Health Insurance
      </div>
      <div style={{ margin: "15px 15px 15px 15px" }}>
        Other than extensive care from expertise team, cost is relatively
        important. Our patients for more than 50 nationalities from difference
        countries who prefer to use medical insurance for their medical
        expenses. Our coordinator will assist the patient to contact insurance
        providers for guarantee payment on their behalf.
      </div>
      <div
        style={{
          color: "#4d4c4c",
          fontSize: 18,
          fontWeight: "bold",
          padding: "15px 15px 0px 15px"
        }}
      >
        Tips for an Easier Fast
      </div>
      <div style={{ margin: "15px 15px 15px 15px" }}>
        The Health Insurance Policyholders are recommended to contact your
        insurance provider in order to check your benefits, coverage and
        authorize before receiving medical service. The patient may enquire the
        insurance to contact us directly at onestop@phyathai.com and we will
        provide necessary medical information by fastest mean.
      </div>
      <Accordeon />

      <img
        style={{ width: "100%", marginTop: 45 }}
        src="/images/mobile/internation-contactus3.jpg"
      />
    </div>
  )
}

export default InsuranceGuidance
