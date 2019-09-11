import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Steps from "./Steps"
import GrayTitle from "./GrayTitle"
import ZDropDownForm from "../../ZDropDownForm"
import PickerTime from "./PickerTime"
import PickerDay from "./PickerDay"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"

const styles = {
  container: {
    background: "white",
    width: "100%",
    padding: 50
  },
  section: {
    flex: 1,
    padding: 10
  }
}
const BlockBooking = () => {
  const [pickerDayFilled, setPickerDayFilled] = useState(null)
  const [pickerTimeFilled, setPickerTimeFilled] = useState(null)

  const _pickerDayFilled = () => {
    setPickerDayFilled(true)
  }

  const _pickerTimeFilled = () => {
    setPickerTimeFilled(true)
  }

  return (
    <Grid item sm={8}>
      <div style={styles.container}>
        <Steps />
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img
              style={{ height: 40 }}
              src="/images/icons/calendar-icon-secondary.jpg"
            />
          </div>
          <div
            style={{
              marginLeft: 10,
              color: "#30bfc5",
              fontSize: 20,
              fontWeight: "bold"
            }}
          >
            รายละเอียดการนัดหมาย
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={styles.section}>
            <GrayTitle text="โรงพยาบาล" />
            <ZDropDownForm placeholder="เลือกโรงพยาบาล" />
          </div>
          <div style={styles.section}>
            <GrayTitle text="ศูนย์การแพทย์" />
            <ZDropDownForm placeholder="เลือกศูนย์การแพทย์" />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={styles.section}>
            <GrayTitle text="เลือกวันเวลานัดหมายที่คุณต้องการ" />
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1, paddingLeft: 10 }}>
                <PickerDay _pickerDayFilled={_pickerDayFilled} />
              </div>
              <div style={{ flex: 1, paddingLeft: 10 }}>
                <PickerTime _pickerTimeFilled={_pickerTimeFilled} />
              </div>
            </div>
          </div>
          {pickerDayFilled && pickerTimeFilled && (
            <div style={styles.section}>
              <GrayTitle text="เลือกวันเวลานัดหมายที่คุณต้องการ" />
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1, paddingLeft: 10 }}>
                  <PickerDay _pickerDayFilled={_pickerDayFilled} />
                </div>
                <div style={{ flex: 1, paddingLeft: 10 }}>
                  <PickerTime _pickerTimeFilled={_pickerTimeFilled} />
                </div>
              </div>
            </div>
          )}
          {(!pickerDayFilled || !pickerTimeFilled) && (
            <div style={styles.section}></div>
          )}
        </div>
      </div>
    </Grid>
  )
}

export default BlockBooking
