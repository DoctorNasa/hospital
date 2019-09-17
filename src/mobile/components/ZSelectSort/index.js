import React, { useState } from "react"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

const ZSelectSort = () => {
  const [values, setValues] = useState("")
  const handleChange = e => setValues(e.target.value)

  return (
    <form autoComplete style={{ display: "flex", justifyContent: "flex-end" }}>
      <FormControl style={{ minWidth: 120 }}>
        <InputLabel htmlFor="age-simple">Sort</InputLabel>
        <Select value={values} onChange={handleChange}>
          <MenuItem value={"Price High->Low"}>Price High->Low</MenuItem>
          <MenuItem value={"Price Low->High"}>Price Low->High</MenuItem>
        </Select>
      </FormControl>
    </form>
  )
}

export default ZSelectSort
