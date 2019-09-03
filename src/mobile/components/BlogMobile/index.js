import React, { useEffect, useState } from "react"

import ButtonDrag from "./ButtonDrag"
import "./styles.css"
import ZVideosCarousel from "../ZVideosCarousel"

const styles = {
  close: {
    marginTop: -180
  },
  open: {
    marginTop: 100
  }
}

const BlogMobile = ({ queries }) => {
  const [isOpen, setIsOpen] = useState(true)

  const _setIsOpen = y => setIsOpen(y)

  useEffect(() => {
    console.log("isOpen", isOpen)
  }, [isOpen])
  return (
    <div>
      <ButtonDrag queries={queries} _setIsOpen={_setIsOpen} isOpen={isOpen} />
      <div style={isOpen ? styles.open : styles.close}>
        <ZVideosCarousel />
      </div>
    </div>
  )
}

export default BlogMobile
