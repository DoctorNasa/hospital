import React from "react"
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
import StarBorder from "@material-ui/icons/StarBorder"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    overflowY: "scroll",
    height: "calc(100% - 250px)",
    color: "#00826a"
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  selectedItem: {
    fontWeight: "bold!important",
    color: "#006351"
  }
}))

const ListMenu = ({ menuDB }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {menuDB.map((menu, index) => {
        if (menu.sub.length > 0) {
          return (
            <>
              <ListItem button onClick={handleClick}>
                <ListItemText
                  className={open && classes.selectedItem}
                  primary={menu.main}
                />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                {menu.sub.map(x => {
                  console.log("fu", x)
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
            <ListItem button>
              <ListItemText primary={menu.main} />
            </ListItem>
          </div>
        )
      })}
    </List>
  )
}

export default ListMenu
