import React, { useEffect, useState } from "react"
import ButtonDrag from "./ButtonDrag"
import "./styles.css"
import ScrollLock from "react-scrolllock"

const styles = {
  close: {
    marginTop: -120,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 30,
    overflow: "hidden",
    height: "100%"
  },
  open: {
    marginTop: 130,
    paddingLeft: 15,
    paddingRight: 15,
    overflow: "hidden",
    height: "100%",
    paddingBottom: 30
  }
}

const items = new Array(20).fill(1)

const PackagesMobile = ({ queries }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [lockScroll, setLockScroll] = useState(false)

  const _setIsOpen = y => setIsOpen(y)
  const _setLockSrcoll = bool => setLockScroll(bool)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    console.log("isOpen", isOpen)
    console.log("queries", queries)
  }, [isOpen, queries])
  return (
    <div>
      <ButtonDrag
        queries={queries}
        _setIsOpen={_setIsOpen}
        isOpen={isOpen}
        _setLockSrcoll={_setLockSrcoll}
      />
      <ScrollLock isActive={lockScroll}>
        <div style={isOpen ? styles.open : styles.close}>
          <div>lol</div>
        </div>
      </ScrollLock>
    </div>
  )
}

export default PackagesMobile
