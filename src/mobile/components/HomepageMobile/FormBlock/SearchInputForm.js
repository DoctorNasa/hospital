import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import InputAdornment from "@material-ui/core/InputAdornment"
import TextField from "@material-ui/core/TextField"
import Search from "@material-ui/icons/Search"

const useStyles = makeStyles(theme => ({
  root: {},
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    flexBasis: 200
  }
}))

export default function SearchInputForm() {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  return (
    <div className={classes.root}>
      <TextField
        fullWidth
        id="outlined-adornment-password"
        variant="outlined"
        type="text"
        label="Search"
        value={values.password}
        onChange={handleChange("password")}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" aria-label="toggle password visibility">
                <Search />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </div>
  )
}
