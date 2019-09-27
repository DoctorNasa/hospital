import React from "react"
import BlueBanner from "./BlueBanner"
import TitlePackageMain from "../../Titles/TitlePackageMain"
import ZPickerDay from "../../ZPickerDay"
import ZPickerTime from "../../ZPickerTime"

const styles = {}

const Booking = () => {
  return (
    <div>
      <BlueBanner />
      <TitlePackageMain text="เลือกวันเวลานัดหมายที่คุณต้องการ" />
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "5px" }}>
          <ZPickerDay />
        </div>
        <div style={{ marginLeft: "5px" }}>
          <ZPickerTime />
        </div>
      </div>
      <TitlePackageMain text="วันนัดหมายสำรอง" />
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "5px" }}>
          <ZPickerDay />
        </div>
        <div style={{ marginLeft: "5px" }}>
          <ZPickerTime />
        </div>
      </div>
      <div style={{ color: "#979693", textAlign: "center" }}>
        ในกรณีที่วันนัดหมายแรกไม่มีแพทย์ท่านใดว่าง
      </div>
    </div>
  )
}

export default Booking
