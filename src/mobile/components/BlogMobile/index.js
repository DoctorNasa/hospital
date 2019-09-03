import React, { useEffect, useState } from "react"

import ButtonDrag from "./ButtonDrag"
import "./styles.css"
import ItemVideo from "../ZVideosCarousel/ItemVideo"
import ItemCardCarousel from "../ZCarouselCardMobile/ItemCardCarousel"

const styles = {
  close: {
    marginTop: -180,
    marginLeft: 15,
    marginRight: 15
  },
  open: {
    marginTop: 100,
    marginLeft: 15,
    marginRight: 15
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
        <ItemVideo vidId="sTQTFRBp9ZA" title="title" desc="desc" />
        <ItemCardCarousel
          title="title 1"
          subtitle="subtitle 1"
          desc="description 1"
        />
        <ItemCardCarousel
          title="title 2"
          subtitle="subtitle 2"
          desc="description 2"
        />
        <ItemCardCarousel
          title="title 3"
          subtitle="subtitle 3"
          desc="description 3"
        />
      </div>
    </div>
  )
}

export default BlogMobile
