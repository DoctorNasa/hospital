import React, { useEffect, useRef, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    minWidth: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

const ZSelect = ({ options, placeHolder, marginTop, marginBottom }) => {
  const classes = useStyles()
  const [values, setValues] = useState({
    age: "",
    link: "hai"
  })

  const inputLabel = useRef(null)
  const [labelWidth, setLabelWidth] = useState(0)
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.link]: event.target.value
    }))
  }

  return (
    <form
      className={classes.root}
      autoComplete="off"
      style={{ marginTop, marginBottom }}
    >
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          {placeHolder ? placeHolder : "Age"}
        </InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          input={
            <OutlinedInput
              labelWidth={labelWidth}
              name="age"
              id="outlined-age-simple"
            />
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </form>
  )
}

export default ZSelect
