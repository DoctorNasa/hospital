import React from "react"
import TitlePackageCategory from "../../Titles/TitlePackageCategory"

const Marketing = () => {
  return (
    <div style={{ margin: "15px 15px 0px 15px" }}>
      <div>
        <TitlePackageCategory
          text="INTERNATIONAL MARKETING"
          img="/images/icons/international/1.png"
          color="rgb(50, 191, 198)"
          padding="15px 0px 15px 0px"
        />
      </div>
      <div>
        <b>Phyathai Hospital</b> has opened it's excellent services to peoples
        from all around the world. International Marketing Department
        participates in many medical and tourism exhibitions in various country
        worldwide every year and present our medical facilities to peoples.
      </div>
      <img
        src="/images/gridphyathai.jpg"
        style={{
          width: "100%",
          boxShadow: "0px 5px 8px 1px rgba(189,189,189,0.58)",
          margin: "30px 0px 30px 0px"
        }}
      />
      <div style={{ paddingBottom: 30 }}>
        <b>Our International Marketing</b> team has created scopes for both
        groups who seeks for medical treatment and who seeks for an oppertunity
        to promote our services to their region as facilitators. Phyathai
        Hospital's International Marketing Department provides the marketing
        material supports to the facilitators. You may contact our International
        Marketing Managers if you require any information from them according to
        their respective region of work.
      </div>
    </div>
  )
}

export default Marketing
