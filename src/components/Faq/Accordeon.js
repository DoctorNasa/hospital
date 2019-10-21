import React, { useRef, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Add from "@material-ui/icons/Add"
import Remove from "@material-ui/icons/Remove"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: "bold",
    color: "#32bfc6"
  },
  panel: {
    boxShadow: "none"
  }
}))

export default function Accordeon({ list }) {
  const inputEl = useRef(null)
  const classes = useStyles()
  const [opened, setopened] = useState(0)
  console.log("-----", inputEl)
  return (
    <div className={classes.root}>
      {list.list.map((item, index) => (
        <ExpansionPanel
          className={classes.panel}
          key={item.id}
          defaultExpanded={index === opened}
        >
          <ExpansionPanelSummary
            ref={inputEl}
            expandIcon={opened === index ? <Remove /> : <Add />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            onClick={() => setopened(index === opened ? null : index)}
          >
            <Typography>{item.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{item.deail}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  )
}
