import React from "react"
import ListMenu from "./ListMenu"
import SearchBarMobile from "./SearchBarMobile"
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
          marginLeft: 15
        }}
      >
        <SearchBarMobile />
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
