import React, { useEffect, useState } from "react"

import ButtonDrag from "./ButtonDrag"
import "./styles.css"
import ItemVideo from "../ZVideosCarousel/ItemVideo"
import ItemCategory from "../ZCardsCategoriesCarousel/ItemCategory"

const styles = {
  close: {
    marginTop: -140,
    marginLeft: 15,
    marginRight: 15
  },
  open: {
    marginTop: 140,
    marginLeft: 15,
    marginRight: 15
  }
}

const BlogMobile = ({ queries }) => {
  const [isOpen, setIsOpen] = useState(true)

  const _setIsOpen = y => setIsOpen(y)

  useEffect(() => {
    console.log("isOpen", isOpen)
    console.log("queries", queries)
  }, [isOpen, queries])
  return (
    <div>
      <ButtonDrag queries={queries} _setIsOpen={_setIsOpen} isOpen={isOpen} />
      <div style={isOpen ? styles.open : styles.close}>
        {queries.articles === undefined && (
          <ItemVideo vidId="sTQTFRBp9ZA" title="title" desc="desc" />
        )}
        {queries.videos === undefined && (
          <>
            <ItemCategory
              imgPath={"/images/cardCarousel.png"}
              title={"title 1"}
              subtitle={"subtitle 1"}
              marginTop={15}
            />
            <ItemCategory
              imgPath={"/images/cardCarousel.png"}
              title={"title 2"}
              subtitle={"subtitle 2"}
              marginTop={15}
            />
            <ItemCategory
              imgPath={"/images/cardCarousel.png"}
              title={"title 3"}
              subtitle={"subtitle 3"}
              marginTop={15}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default BlogMobile
