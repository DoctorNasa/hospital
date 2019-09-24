import React, { useState } from "react"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  formControl: {
    width: "100%"
  },
  controlLabel: {
    flex: 1
  }
}))

export default function Radios({ value, _onChange }) {
  const classes = useStyles()

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <RadioGroup
        aria-label="position"
        name="position"
        value={value}
        onChange={e => _onChange(e.target.value)}
        row
      >
        <FormControlLabel
          value="male"
          control={<Radio color="secondary" />}
          label="นาย"
          labelPlacement="end"
          className={classes.controlLabel}
        />
        <FormControlLabel
          value="female"
          control={<Radio color="secondary" />}
          label="นาง"
          labelPlacement="end"
          className={classes.controlLabel}
        />
        <FormControlLabel
          value="transgender"
          control={<Radio color="secondary" />}
          label="นางสาว"
          labelPlacement="end"
          className={classes.controlLabel}
        />
      </RadioGroup>
    </FormControl>
  )
}
