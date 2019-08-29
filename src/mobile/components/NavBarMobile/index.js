import React, { useState } from "react"
import "./style.css"
import Hamburger from "react-hamburger-menu"
import MenuMobile from "./MenuMobile"
import useScrollPosition from "use-scroll-position"

const menuDB = [
  {
    main: "homepage",
    sub: []
  },
  {
    main: "hospital service",
    sub: []
  },
  {
    main: "promotion packages",
    sub: []
  },
  {
    main: "health article",
    sub: ["medical articles", "videos", "staff", "innovation"]
  },
  {
    main: "innovation",
    sub: []
  },
  {
    main: "about us",
    sub: []
  },
  {
    main: "member",
    sub: []
  }
]

const styleBgLight = scrollPosition => ({
  backgroundColor: `rgba(255, 255, 255, ${(1 / 250) * scrollPosition})`
})

const NavBarMobile = ({ pageContainer }) => {
  const [open, setOpen] = useState(null)
  const scrollPosition = useScrollPosition()
  return (
    <>
      <div
        className={pageContainer === 0 ? "headerLight" : "headerDark"}
        style={styleBgLight(scrollPosition)}
        onScroll={() => console.log("lol")}
      >
        <div style={{ flex: 1 }}>
          <img src="/images/logo-mobile.png" style={{ width: "100%" }} />
        </div>

        <div
          style={{
            flex: 1,
            direction: "rtl",
            paddingRight: 30,
            marginTop: 9
          }}
        >
          <Hamburger
            isOpen={open}
            menuClicked={() => setOpen(!open)}
            width={30}
            height={30}
            strokeWidth={4}
            rotate={0}
            color="#00826a"
            borderRadius={10}
            animationDuration={0.3}
          />
          {open && <div style={{ color: "#32bfc6", fontSize: 12 }}>Close</div>}
        </div>
      </div>
      <MenuMobile menuDB={menuDB} open={open} />
    </>
  )
}

export default NavBarMobile
