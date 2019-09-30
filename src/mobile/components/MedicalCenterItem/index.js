import React, { useEffect, useState } from "react"
import ButtonDrag from "./ButtonDrag"
import "./styles.css"
import ScrollLock from "react-scrolllock"
import TitlePackageCategory from "../Titles/TitlePackageCategory"
import ZVideosCarousel from "../ZVideosCarousel"
import BtnBlue from "../BtnBlue"

const styles = {
  close: {
    marginTop: -120,
    paddingBottom: 30,
    overflow: "hidden",
    height: "100%"
  },
  open: {
    marginTop: 130,
    overflow: "hidden",
    height: "100%",
    paddingBottom: 30
  }
}

const items = new Array(20).fill(1)

const PackagesMobile = ({ match }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [lockScroll, setLockScroll] = useState(false)

  const _setIsOpen = y => setIsOpen(y)
  const _setLockSrcoll = bool => setLockScroll(bool)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <ButtonDrag
        _setIsOpen={_setIsOpen}
        isOpen={isOpen}
        _setLockSrcoll={_setLockSrcoll}
      />
      <ScrollLock isActive={lockScroll}>
        <div style={isOpen ? styles.open : styles.close}>
          <div>
            <TitlePackageCategory
              img="/images/icons/heartbeat.png"
              text="ศูนย์หัวใจ"
              color="#32bfc6"
              fontSize={20}
              imgSize={50}
              padding="0px 15px 15px 15px"
            />
            <img
              src="/images/mobile/blog/ads-post-page.jpg"
              style={{ width: "100%" }}
            />
            <div style={{ color: "#959595", margin: "15px 15px 15px 15px" }}>
              Aliquam erat volutpat. Aenean egestas sollicitudin risus, vitae
              sollicitudin metus accumsan eget. Fusce id semper tortor. Integer
              vel arcu urna. Suspendisse vitae eros elit. Pellentesque at leo
              risus. Vivamus in diam a augue vulputate elementum. Maecenas
              luctus lacus a nunc dictum fermentum. Vivamus et molestie enim.
            </div>
            <ZVideosCarousel title="บทความสำหรับคุณ" />
            <BtnBlue text="ดูทั้งหมด" textAlign="center" />
          </div>
        </div>
      </ScrollLock>
    </div>
  )
}

export default PackagesMobile
