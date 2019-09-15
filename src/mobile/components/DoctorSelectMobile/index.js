import React, { useEffect, useState, useRef } from "react"
import Pagination from "../Pagination"
import DoctorItem from "./DoctorItem"
import TitlePackageCategory from "../Titles/TitlePackageCategory"
import BtnBlue from "../BtnBlue"
import ButtonDrag from "./ButtonDrag"
import "./styles.css"
import ScrollLock, { TouchScrollable } from "react-scrolllock"
import ZCardsDoctorCarousel from "../ZCardsDoctorCarousel"

const styles = {
  close: {
    marginTop: -210,
    marginLeft: 15,
    marginRight: 15,
    overflow: "hidden",
    height: "100%"
  },
  open: {
    marginTop: 130,
    marginLeft: 15,
    marginRight: 15,
    overflow: "hidden",
    height: "100%"
  }
}

const items = new Array(20).fill(1)

const DoctorSelectMobile = ({ queries }) => {
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
          <TitlePackageCategory text="โรงพยาบาล พญาไท 1" />
          <ZCardsDoctorCarousel />
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <BtnBlue text="ดูแพทย์เทั้งหมด" outlined />
          </div>
          <TitlePackageCategory text="โรงพยาบาล พญาไท 2" />
          <ZCardsDoctorCarousel />
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <BtnBlue text="ดูแพทย์เทั้งหมด" outlined />
          </div>
          <TitlePackageCategory text="โรงพยาบาล พญาไท 3" />
          <ZCardsDoctorCarousel />
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <BtnBlue text="ดูแพทย์เทั้งหมด" outlined />
          </div>
          <TitlePackageCategory text="โรงพยาบาล พญาไท ศรีราชา" />
          <ZCardsDoctorCarousel />
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <BtnBlue text="ดูแพทย์เทั้งหมด" outlined />
          </div>
          <TitlePackageCategory text="โรงพยาบาล พญาไท นวมินทร์" />
          <ZCardsDoctorCarousel />
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <BtnBlue text="ดูแพทย์เทั้งหมด" outlined />
          </div>
        </div>
      </ScrollLock>
    </div>
  )
}

export default DoctorSelectMobile
