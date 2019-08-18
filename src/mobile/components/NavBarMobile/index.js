import React, { useState } from "react"
import "./style.css"
import Hamburger from "react-hamburger-menu"

const NavBarMobile = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="hamburger">
        <Hamburger
          isOpen={open}
          menuClicked={() => setOpen(!open)}
          width={33}
          height={30}
          strokeWidth={2}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.3}
        />
      </div>
      <div className={open ? "container" : "slide-in-left-reverse"} />
    </div>
  )
}

export default NavBarMobile
