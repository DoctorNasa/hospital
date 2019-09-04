import React, { useEffect, useState, useRef } from "react"
import Pagination from "../Pagination"

import ButtonDrag from "./ButtonDrag"
import "./styles.css"
import ItemVideo from "../ZVideosCarousel/ItemVideo"
import ItemCategory from "../ZCardsCategoriesCarousel/ItemCategory"
import ScrollLock, { TouchScrollable } from "react-scrolllock"

const styles = {
  close: {
    marginTop: -100,
    marginLeft: 15,
    marginRight: 15,
    overflow: "hidden",
    height: "100%",
    display: "flex"
  },
  open: {
    marginTop: 130,
    marginLeft: 15,
    marginRight: 15,
    overflow: "hidden",
    height: "100%",
    display: "flex"
  }
}

const items = new Array(20).fill(1)

const BlogMobile = ({ queries }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [lockScroll, setLockScroll] = useState(false)

  const _setIsOpen = y => setIsOpen(y)
  const _setLockSrcoll = bool => setLockScroll(bool)

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
          {queries.articles === undefined && (
            <ItemVideo vidId="sTQTFRBp9ZA" title="title" desc="desc" />
          )}
          {queries.videos === undefined && (
            <>
              {items.map((x, i) => (
                <ItemCategory
                  key={i}
                  imgPath={`/images/cardCarousel.png`}
                  title={`title ${i}`}
                  subtitle={`subtitle ${i}`}
                  marginTop={15}
                />
              ))}
            </>
          )}
        </div>
        <Pagination currentPage={1} itemsLength={items.length} />
      </ScrollLock>
    </div>
  )
}

export default BlogMobile
