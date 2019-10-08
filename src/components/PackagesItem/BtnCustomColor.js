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
    border: "none",
    width: "90%",
    color: "white",
    backgroundColor: "#d7d7d7",
    "&:hover": {
      backgroundColor: "#e6e6e6"
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
      <ColorButton variant="contained" className={classes.margin}>
        ดำเนินการชำระงิน
      </ColorButton>
    </div>
  )
}
