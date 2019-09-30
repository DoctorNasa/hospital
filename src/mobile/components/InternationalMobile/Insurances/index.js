import React from "react"
import TitlePackageCategory from "../../Titles/TitlePackageCategory"
import Tableau from "../Tableau"

const Insurances = () => {
  React.useEffect(() => window.scrollTo(0, 0), [])
  return (
    <div style={{ margin: "15px 0px -10px 0px" }}>
      <TitlePackageCategory
        text="INSURANCES LIST"
        img="/images/icons/international/5.png"
        color="rgb(50, 191, 198)"
        padding="15px 15px 15px 15px"
      />
      <Tableau
        data={[
          {
            name: "Global Benefits Group,Inc. ",
            website: "http://www.gbgi.net/",
            location: "Munich",
            contact: "Phone : 949-916-7941" + "  " + "Phone : 949-916-7941"
          },
          {
            name: "Global Benefits Group,Inc. ",
            website: "http://www.gbgi.net/",
            location: "Munich",
            contact: "Phone : 949-916-7941" + "  " + "Phone : 949-916-7941"
          },
          {
            name: "Global Benefits Group,Inc. ",
            website: "http://www.gbgi.net/",
            location: "Munich",
            contact: "Phone : 949-916-7941" + "  " + "Phone : 949-916-7941"
          },
          {
            name: "Global Benefits Group,Inc. ",
            website: "http://www.gbgi.net/",
            location: "Munich",
            contact: "Phone : 949-916-7941" + "  " + "Phone : 949-916-7941"
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

export default Insurances
