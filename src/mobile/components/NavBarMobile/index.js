import React, { useState } from "react"
import "./style.css"
import Hamburger from "react-hamburger-menu"
import MenuMobile from "./MenuMobile"

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

const NavBarMobile = () => {
  const [open, setOpen] = useState(null)
  return (
    <>
      <div className="hamburger">
        <Hamburger
          isOpen={open}
          menuClicked={() => setOpen(!open)}
          width={35}
          height={35}
          strokeWidth={2}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.3}
        />
      </div>
      <MenuMobile menuDB={menuDB} open={open} />
    </>
  )
}

export default NavBarMobile
