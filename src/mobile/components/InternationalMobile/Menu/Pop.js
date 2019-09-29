import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Popover from "@material-ui/core/Popover"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { Link } from "react-router-dom"

const styles = {
  active: {
    background: "#32bfc6",
    color: "white",
    padding: "5px 10px 5px 10px",
    borderRadius: 15
  },
  notActive: {}
}

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}))

export default function SimplePopover({ isActive, title, subMenu }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  return (
    <div>
      {isActive ? (
        <div
          style={styles.active}
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          {title}
        </div>
      ) : (
        <div
          style={styles.notActive}
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          {title}
        </div>
      )}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        {subMenu.map(x => (
          <ListItem
            button
            className={classes.nested}
            component={Link}
            to={x.link}
          >
            <ListItemText primary={x.title} />
          </ListItem>
        ))}
      </Popover>
    </div>
  )
}
