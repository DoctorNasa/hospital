import "date-fns"
import React, { useState } from "react"
import DateFnsUtils from "@date-io/date-fns"
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers"
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

export default function MaterialUIPickers({ _pickerDayFilled }) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(
    new Date().setDate(new Date().getDate() + 1)
  )

  function handleDateChange(date) {
    setSelectedDate(date)
    _pickerDayFilled()
  }

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          minDate={new Date().setDate(new Date().getDate() + 1)}
          maxDate={new Date().setDate(new Date().getDate() + 365)}
          inputVariant="outlined"
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
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}
