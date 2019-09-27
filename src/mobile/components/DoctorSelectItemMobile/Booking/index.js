import React from "react"
import BlueBanner from "./BlueBanner"
import TitlePackageMain from "../../Titles/TitlePackageMain"
import ZPickerDay from "../../ZPickerDay"
import ZPickerTime from "../../ZPickerTime"
import Step1 from "../../DoctorSelectMobile/BlockBooking/Step1"
import BtnBlue from "../../BtnBlue"

const styles = {
  container: {
    padding: "0px 0px 30px 0px"
  }
}

const Booking = ({ stateRedux, _actionRedux, _setSuccess }) => {
  return (
    <div style={styles.container}>
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
      <div style={{ color: "#979693", textAlign: "center", paddingBottom: 30 }}>
        ในกรณีที่วันนัดหมายแรกไม่มีแพทย์ท่านใดว่าง
      </div>
      <Step1
        noBackBtn
        stateRedux={stateRedux}
        _actionRedux={_actionRedux}
        margin="30px 0px 0px 0px"
      />
      <div
        onClick={() => _setSuccess(true)}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <BtnBlue text="ตกลง" />
      </div>
    </div>
  )
}

export default Booking
