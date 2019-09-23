import React from "react"
import TextField from "@material-ui/core/TextField"

const ZInput = ({ value, _onChange, label }) => {
  return (
    <TextField
      id="outlined-name"
      label={label}
      value={value}
      onChange={e => _onChange(e.target.value)}
      margin="normal"
      variant="outlined"
    />
  )
}

export default ZInput
