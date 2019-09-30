import React from "react"
import TitlePackageCategory from "../../Titles/TitlePackageCategory"
import Tableau from "../Tableau"

const CorporateRepresentative = () => {
  React.useEffect(() => window.scrollTo(0, 0), [])
  return (
    <div style={{ margin: "15px 0px -10px 0px" }}>
      <TitlePackageCategory
        text="LIST OF CORPORATE REPRESENTATIVE"
        img="/images/icons/international/4.png"
        color="rgb(50, 191, 198)"
        padding="15px 15px 15px 15px"
      />
      <div style={{ margin: "15px 15px 15px 15px" }}>
        <b>Phyathai 2 International Hospital</b> has been serving many
        international patients from numerous corporations such as embassies,
        airlines and chambers. We work with these companies in order to
        convenience their employees and covering expatriates or tourists who are
        under our corporate partners. We earn trust from these well-known
        organizations meantime; we are continually developing our capability to
        serve our corporate partners and clients.
      </div>
      <TitlePackageCategory
        text="Lists of Corporate Airline"
        img="/images/icons/international/4.png"
        color="rgb(50, 191, 198)"
        padding="15px 15px 15px 5px"
        noImg
      />
      <Tableau
        data={[
          {
            name: "El Al Israel Airlines",
            country: "Thailand",
            phone: "+972 39771111",
            contact: "http://www.elal..co.il"
          },
          {
            name: "El Al Israel Airlines",
            country: "Thailand",
            phone: "+972 39771111",
            contact: "http://www.elal..co.il"
          },
          {
            name: "El Al Israel Airlines",
            country: "Thailand",
            phone: "+972 39771111",
            contact: "http://www.elal..co.il"
          },
          {
            name: "El Al Israel Airlines",
            country: "Thailand",
            phone: "+972 39771111",
            contact: "http://www.elal..co.il"
          }
        ]}
      />
      <TitlePackageCategory
        text="Lists of Corporate Chambers of 
        Commerce"
        img="/images/icons/international/4.png"
        color="rgb(50, 191, 198)"
        padding="15px 15px 15px 5px"
        noImg
      />
      <Tableau
        data={[
          {
            name: "El Al Israel Airlines",
            country: "Thailand",
            phone: "+972 39771111",
            contact: "http://www.elal..co.il"
          },
          {
            name: "El Al Israel Airlines",
            country: "Thailand",
            phone: "+972 39771111",
            contact: "http://www.elal..co.il"
          },
          {
            name: "El Al Israel Airlines",
            country: "Thailand",
            phone: "+972 39771111",
            contact: "http://www.elal..co.il"
          },
          {
            name: "El Al Israel Airlines",
            country: "Thailand",
            phone: "+972 39771111",
            contact: "http://www.elal..co.il"
          }
        ]}
      />
      <TitlePackageCategory
        text="Lists of Corporate Airline"
        img="/images/icons/international/4.png"
        color="rgb(50, 191, 198)"
        padding="15px 15px 15px 5px"
        noImg
      />

      <Tableau
        data={[
          {
            name: "El Al Israel Airlines",
            country: "Thailand",
            phone: "+972 39771111",
            contact: "http://www.elal..co.il"
          },
          {
            name: "El Al Israel Airlines",
            country: "Thailand",
            phone: "+972 39771111",
            contact: "http://www.elal..co.il"
          },
          {
            name: "El Al Israel Airlines",
            country: "Thailand",
            phone: "+972 39771111",
            contact: "http://www.elal..co.il"
          },
          {
            name: "El Al Israel Airlines",
            country: "Thailand",
            phone: "+972 39771111",
            contact: "http://www.elal..co.il"
          }
        ]}
      />
      <img
        style={{ width: "100%", marginTop: 45 }}
        src="/images/mobile/internation-contactus3.jpg"
      />
    </div>
  )
}

export default CorporateRepresentative
