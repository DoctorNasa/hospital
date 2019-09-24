import "date-fns"
import React, { useState } from "react"
import DateFnsUtils from "@date-io/date-fns"
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers"
import { createMuiTheme } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%"
  }
}))

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

export default function MaterialUIPickers() {
  const classes = useStyles()

  const [selectedDate, setSelectedDate] = useState(
    new Date().setDate(new Date().getDate() - 365 * 30)
  )

  function handleDateChange(date) {
    setSelectedDate(date)
  }

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
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
          className={classes.container}
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}
