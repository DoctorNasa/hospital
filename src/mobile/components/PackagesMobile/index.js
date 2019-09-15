import React, { useEffect, useState, useRef } from "react"
import Pagination from "../Pagination"

import ButtonDrag from "./ButtonDrag"
import "./styles.css"
import ItemVideo from "../ZVideosCarousel/ItemVideo"
import ItemPackage from "./ItemPackage"
import ScrollLock, { TouchScrollable } from "react-scrolllock"
import TitlePackageMain from "../Titles/TitlePackageMain"
import TitlePackageCategory from "../Titles/TitlePackageCategory"

const styles = {
  close: {
    marginTop: -230,
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
          <TitlePackageMain
            text="แพ็คเกจและโปรโมชั่น"
            padding="10px 0px 10px 0px"
          />
          <TitlePackageCategory text="โรงพยาบาล พญาไท 1" />
          <ItemPackage
            imgPath={`/images/mobile/package-item.jpg`}
            title={`title`}
            subtitle={`subtitle`}
            marginTop={15}
            link={"/packages/item/id1"}
          />
          <ItemPackage
            imgPath={`/images/mobile/package-item.jpg`}
            title={`title`}
            subtitle={`subtitle`}
            marginTop={15}
            link={"/packages/item/id2"}
          />
          <ItemPackage
            imgPath={`/images/mobile/package-item.jpg`}
            title={`title`}
            subtitle={`subtitle`}
            marginTop={15}
            link={"/packages/item/id3"}
          />
          <TitlePackageCategory
            text="โรงพยาบาล พญาไท 2"
            padding="15px 0px 15px 0px"
          />
          <ItemPackage
            imgPath={`/images/mobile/package-item.jpg`}
            title={`title`}
            subtitle={`subtitle`}
            marginTop={15}
            link={"/packages/item/id4"}
          />
        </div>
      </ScrollLock>
    </div>
  )
}

export default PackagesMobile
