import React from "react"
import TextField from "@material-ui/core/TextField"

const ZInput = ({
  value,
  _onChange,
  label,
  multiline,
  rows,
  type = "text"
}) => {
  return (
    <TextField
      id="outlined-name"
      label={label}
      value={value}
      onChange={e => _onChange(e.target.value)}
      margin="normal"
      variant="outlined"
      fullWidth
      multiline={multiline}
      rows={rows}
      type={type}
    />
  )
}

export default ZInput
