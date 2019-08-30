import React from "react"
import ListMenu from "./ListMenu"
import SearchBarMobile from "../../SearchBarMobile"
import PopUpCountry from "./PopUpCountry"

const MenuMobile = ({ open, menuDB }) => {
  return (
    <div
      className={
        open === null ? "menuInit" : open ? "menuSlideIn" : "menuSlideOut"
      }
    >
      <ListMenu menuDB={menuDB} />
      <div
        style={{
          position: "fixed",
          bottom: 0,
          marginLeft: 16
        }}
      >
        <div style={{ paddingRight: 30, marginTop: 20, marginBottom: 20 }}>
          <SearchBarMobile />
        </div>

        <PopUpCountry />
        <img
          style={{ width: "calc(100% - 55px)", marginTop: 20 }}
          src="/images/bottom-mobile.jpg"
        />
      </div>
    </div>
  )
}

export default MenuMobile
