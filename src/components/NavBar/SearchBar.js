import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import IconButton from "@material-ui/core/IconButton"
import Input from "@material-ui/core/Input"
import Search from "@material-ui/icons/Search"

const useStyles = makeStyles({
  root: {
    color: "yellow",
    "&$selected": {
      backgroundColor: "pink"
    },
    width: 250
  },
  input: {
    color: "#00826a"
  },
  input2: {
    color: "#00826a"
  }
})

const SearchBar = () => {
  const classes = useStyles()

  return (
    <Input
      id="standard-with-placeholder"
      label="Search"
      placeholder="Search"
      className={classes.root}
      margin="normal"
      InputProps={{
        className: classes.input,
        InputLabelProps: classes.input2
      }}
      inputProps={{ className: classes.input2 }}
      InputLabelProps={{ className: classes.input2 }}
      inputRef={{ className: classes.input2 }}
      SelectProps={{ className: classes.input2 }}
      FormHelperTextProps={{ className: classes.input2 }}
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="Search">
            <Search />
          </IconButton>
        </InputAdornment>
      }
    />
  )
}

export default SearchBar
