import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: "calc(100% - 15px)"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  noStyle: {
    textDecoration: "none",
    color: "black"
  }
}))

const ZSelectBranch = ({ match, dbBranches, baseUrl, margin }) => {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    age: "",
    name: "hai"
  })

  const inputLabel = React.useRef(null)
  const [labelWidth, setLabelWidth] = React.useState(0)
  React.useEffect(() => {
    console.log(match.params.branch)
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [match.params.branch])

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <form style={{ margin }} autoComplete="off">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          Branch
        </InputLabel>
        <Select
          value={
            match.params.branch === "phyathai1"
              ? 1
              : match.params.branch === "phyathai2"
              ? 2
              : match.params.branch === "phyathai3"
              ? 3
              : match.params.branch === "พญาไทศรีราชา"
              ? 4
              : match.params.branch === "พญาไทนวมินทร์" && 5
          }
          input={
            <OutlinedInput
              labelWidth={labelWidth}
              name="age"
              id="outlined-age-simple"
            />
          }
        >
          {dbBranches.map((x, index) => (
            <MenuItem
              value={index + 1}
              component={Link}
              to={`${baseUrl}/${x.id}`}
            >
              {x.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  )
}

export default ZSelectBranch
