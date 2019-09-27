import "date-fns"
import React, { useState } from "react"
import DateFnsUtils from "@date-io/date-fns"
import { MuiPickersUtilsProvider, TimePicker } from "@material-ui/pickers"
import { createMuiTheme } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"

const defaultMaterialTheme = createMuiTheme({
  padding: 0,
  palette: {
    primary: {
      light: "#757ce8",
      main: "#30bfc5",
      dark: "#002884",
      contrastText: "#fff"
    }
  }
})

export default function MaterialUIPickers({ _pickerTimeFilled }) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleDateChange = date => {
    setSelectedDate(date)
    _pickerTimeFilled()
  }

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimePicker
          emptyLabel
          inputVariant="outlined"
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
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}
