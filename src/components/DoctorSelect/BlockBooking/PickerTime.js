import "date-fns"
import React from "react"
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from "@material-ui/pickers"

export default function MaterialUIPickers({ _pickerTimeFilled }) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date())

  const handleDateChange = date => {
    setSelectedDate(date)
    _pickerTimeFilled()
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardTimePicker
          color="secondary"
          minutesStep={15}
          ampm={false}
          margin="normal"
          id="time-picker"
          label="เลือกเวลา"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  )
}
