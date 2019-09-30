import React from "react"
import TitlePackageCategory from "../Titles/TitlePackageCategory"
import BtnBlue from "../BtnBlue"
import ZCardsDoctorCarousel from "../ZCardsDoctorCarousel"

const SelectDoctorPage = () => {
  return (
    <div>
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
  )
}

export default SelectDoctorPage
