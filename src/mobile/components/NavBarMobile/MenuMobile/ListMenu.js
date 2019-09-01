import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import ListSubheader from "@material-ui/core/ListSubheader"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Collapse from "@material-ui/core/Collapse"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import SendIcon from "@material-ui/icons/Send"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    overflowY: "scroll",
    height: "calc(100% - 250px)",
    color: "#00826a",
    marginTop: 75
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  selectedItem: {
    fontWeight: "bold!important",
    color: "#006351"
  }
}))

const ListMenu = ({ menuDB, _menuOpen }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {menuDB.map((x, index) => {
        if (x.sub.length > 0) {
          return (
            <>
              <ListItem button onClick={handleClick}>
                <ListItemText
                  className={open && classes.selectedItem}
                  primary={x.main}
                />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                {x.sub.map(x => {
                  return (
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary={x} />
                      </ListItem>
                    </List>
                  )
                })}
              </Collapse>
            </>
          )
        }
        return (
          <div>
            <ListItem
              button
              component={Link}
              to={x.link}
              onClick={() => _menuOpen(false)}
            >
              <ListItemText primary={x.main} />
            </ListItem>
          </div>
        )
      })}
    </List>
  )
}

export default ListMenu
