import React, { useState } from "react"
import GrayTitle from "./GrayTitle"
import ZSelect from "../../ZSelect"
import PickerTime from "./PickerTime"
import PickerDay from "./PickerDay"
import BtnBlue from "../../BtnBlue"
import TitleBlueIcon from "./TitleBlueIcon"

const styles = {
  section: {
    flex: 1
  }
}
const Step0 = ({ handleNext, handleBack, activeStep, _fillBooking, state }) => {
  const [pickerDayFilled, setPickerDayFilled] = useState(null)
  const [pickerTimeFilled, setPickerTimeFilled] = useState(null)
  const [select, setSelect] = useState(null)

  const _select = i => {
    setSelect(i)
  }

  const _pickerDayFilled = () => {
    setPickerDayFilled(true)
  }

  const _pickerTimeFilled = () => {
    setPickerTimeFilled(true)
  }

  return (
    <div>
      <TitleBlueIcon
        text="รายละเอียดการนัดหมาย"
        img="/images/icons/calendar-icon-secondary.jpg"
      />
      <div style={styles.section}>
        <GrayTitle text="โรงพยาบาล" />
        <ZSelect
          select={select}
          _select={_select}
          placeHolder="เลือกโรงพยาบาล"
        />
      </div>
      <div style={styles.section}>
        <GrayTitle text="ศูนย์การแพทย์" />
        <ZSelect
          select={select}
          _select={_select}
          placeHolder="เลือกศูนย์การแพทย์"
        />
      </div>
      <div style={{ display: "flex" }}>
        <div style={styles.section}>
          <GrayTitle text="เลือกวันเวลานัดหมายที่คุณต้องการ" />
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1, paddingRight: 5 }}>
              <PickerDay _pickerDayFilled={_pickerDayFilled} />
            </div>
            <div style={{ flex: 1, paddingLeft: 5 }}>
              <PickerTime _pickerTimeFilled={_pickerTimeFilled} />
            </div>
          </div>
        </div>
      </div>
      <div onClick={handleNext} style={{ textAlign: "center", marginTop: 15 }}>
        <BtnBlue text="ต่อไป" />
      </div>
    </div>
  )
}

export default Step0
//TODO SEND TO REDUCER _fillBooking (make form data available before)
