import React, { useState } from "react"
import GrayTitle from "./GrayTitle"
import ZDropDownForm from "../../ZDropDownForm"
import PickerTime from "./PickerTime"
import PickerDay from "./PickerDay"
import BtnBlue from "../../BtnBlue"

const styles = {
  section: {
    flex: 1,
    padding: 10
  }
}
const Step1 = ({
  handleNext,
  handleBack,
  activeStep,
  _fillCustomer,
  state
}) => {
  return (
    <div>
      <div
        onClick={handleNext}
        style={{ textAlign: "center", marginTop: 30, marginBottom: 30 }}
      >
        <BtnBlue text="ต่อไป" />
      </div>
    </div>
  )
}

export default Step1
//TODO SEND TO REDUCER _fillCustomer (make form data available before)
