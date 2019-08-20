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
      <div style={{ height: 60, background: "white", textAlign: "right" }}>
        <img
          src="/images/mobile-logo.jpg"
          style={{
            width: "40%",
            marginLeft: 10,
            marginRight: 30,
            marginTop: 10,
            marginBottom: 10
          }}
        />
      </div>
      <ListMenu menuDB={menuDB} />
      <div
        style={{
          position: "fixed",
          bottom: 0,
          marginLeft: 15,
          marginRight: 15
        }}
      >
        <SearchBarMobile />
        <PopUpCountry />
        <img
          style={{ width: "calc(100% - 55px)", padding: 20 }}
          src="/images/bottom-mobile.jpg"
        />
      </div>
    </div>
  )
}

export default MenuMobile
