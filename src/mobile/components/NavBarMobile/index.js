import React, { useState, useEffect } from "react"
import "./style.css"
import Hamburger from "react-hamburger-menu"
import MenuMobile from "./MenuMobile"
import useScrollPosition from "use-scroll-position"
import { Link } from "react-router-dom"

const menuDB = [
  {
    main: "homepage",
    sub: [],
    link: "/"
  },
  {
    main: "hospital service",
    sub: [],
    link: "/"
  },
  {
    main: "promotion packages",
    sub: [],
    link: "/"
  },
  {
    main: "health article",
    sub: ["medical articles", "videos", "staff", "innovation"],
    link: "/articles"
  },
  {
    main: "innovation",
    sub: [],
    link: "/"
  },
  {
    main: "about us",
    sub: [],
    link: "/"
  },
  {
    main: "member",
    sub: [],
    link: "/"
  }
]

const styleBgLight = scrollPosition => ({
  backgroundColor: `rgba(255, 255, 255, ${(1 / 250) * scrollPosition})`
})

const styleBgDark = open =>
  open
    ? {
        backgroundColor: `white`
      }
    : {
        backgroundColor: `white`,
        boxShadow:
          "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)"
      }

const NavBarMobile = ({ pageContainer }) => {
  const [open, setOpen] = useState(null)
  const scrollPosition = useScrollPosition()

  useEffect(() => {
    console.log("useeffect", pageContainer)
  }, [pageContainer])

  const _menuOpen = bool => setOpen(bool)

  return (
    <>
      <div
        className={pageContainer === 0 ? "headerLight" : "headerDark"}
        style={
          pageContainer === 0 ? styleBgLight(scrollPosition) : styleBgDark(open)
        }
        onScroll={() => console.log("lol")}
      >
        <div style={{ flex: 1 }}>
          <Link to="/">
            <img src="/images/logo-mobile.png" style={{ width: "100%" }} />
          </Link>
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
      <MenuMobile menuDB={menuDB} open={open} _menuOpen={_menuOpen} />
    </>
  )
}

export default NavBarMobile
