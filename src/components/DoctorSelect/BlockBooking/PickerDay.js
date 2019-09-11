import "date-fns"
import React from "react"
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers"

export default function MaterialUIPickers({ _pickerDayFilled }) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date())

  function handleDateChange(date) {
    setSelectedDate(date)
    _pickerDayFilled()
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="เลือกวัน"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  )
}
