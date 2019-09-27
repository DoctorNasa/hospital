import React from "react"
import TitlePackageMain from "../Titles/TitlePackageMain"
import ZSelectBranch from "../ZSelectBranch"
import ZSelectSort from "../ZSelectSort"
import BreadCrumb from "../BreadCrumb"
import dbBranches from "../../../dbBranches.json"
import ZCarouselCardMobile from "../ZCarouselCardMobile"
import ZCardsAccommodations from "../ZCardsAccommodations"
import ItemAccommodation from "../ZCardsAccommodations/ItemAccommodation"

const styles = {
  container: {
    paddingTop: 70
  }
}

const AccomodationsMobile = ({ match }) => {
  return (
    <div style={styles.container}>
      <img
        src="/images/mobile/accommodation-banner.jpg"
        style={{ width: "100%" }}
      />
      <div style={{ background: "white", padding: "0px 15px 0px 15px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: 5
          }}
        >
          <div style={{ flex: 1 }}>
            <TitlePackageMain text="เลือกโรงพยาบาล" />
          </div>
          <div style={{ flex: 1 }}>
            <ZSelectSort />
          </div>
        </div>

        <ZSelectBranch
          placeHolder={match.params.branch}
          match={match}
          baseUrl={"/accommodations"}
          dbBranches={dbBranches}
          margin={"30px 0px 30px 0px"}
        />
      </div>
      <div style={{ background: "#f3f3f3" }}>
        <BreadCrumb
          padding="15px 15px 0px 15px"
          crumbs={[
            { name: "หน้าหลัก", link: "/" },
            { name: "สิ่งอำนวยความสะดวก" }
          ]}
        />
        <ZCarouselCardMobile />
        <ItemAccommodation
          imgPath="/images/mobile/accommodations-room.jpg"
          title="Prestige-VIP (1565)"
          price="22,610"
          margin={"30px 15px 15px 15px"}
          link={`/accommodations/${match.params.branch}/1`}
        />
        <ItemAccommodation
          imgPath="/images/mobile/accommodations-room.jpg"
          title="Prestige-VIP (1565)"
          price="22,610"
          margin={"30px 15px 15px 15px"}
          link={`/accommodations/${match.params.branch}/2`}
        />
        <ItemAccommodation
          imgPath="/images/mobile/accommodations-room.jpg"
          title="Prestige-VIP (1565)"
          price="22,610"
          margin={"30px 15px 15px 15px"}
          link={`/accommodations/${match.params.branch}/3`}
        />
        <ItemAccommodation
          imgPath="/images/mobile/accommodations-room.jpg"
          title="Prestige-VIP (1565)"
          price="22,610"
          margin={"30px 15px 15px 15px"}
          link={`/accommodations/${match.params.branch}/4`}
        />
        <div style={{ paddingBottom: 30 }}>
          <ItemAccommodation
            imgPath="/images/mobile/accommodations-room.jpg"
            title="Prestige-VIP (1565)"
            price="22,610"
            margin={"30px 15px 15px 15px"}
            link={`/accommodations/${match.params.branch}/5`}
          />
        </div>

        {/* <ZCardsAccommodations match={match} /> */}
      </div>
    </div>
  )
}

export default AccomodationsMobile
