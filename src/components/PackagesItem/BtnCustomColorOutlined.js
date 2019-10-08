import React from "react"
import {
  createMuiTheme,
  withStyles,
  makeStyles
} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const ColorButton = withStyles(theme => ({
  root: {
    fontWeight: "bold",
    fontSize: 20,
    width: "90%",
    color: "#d7d7d7",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#e6e6e6",
      color: "white",
      borderColor: "white"
    }
  }
}))(Button)

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}))

export default function CustomizedButtons() {
  const classes = useStyles()

  return (
    <div>
      <ColorButton variant="outlined" className={classes.margin}>
        ไปยังรถเข็น
      </ColorButton>
    </div>
  )
}
