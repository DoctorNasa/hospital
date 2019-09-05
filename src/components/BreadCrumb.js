import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center",
    flexWrap: "wrap"
  }
}))

const CustomSeparator = ({ crumbs, padding }) => {
  const classes = useStyles()

  return (
    <div className={classes.root} style={{ padding }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {crumbs.map((x, index) =>
          index === crumbs.length - 1 ? (
            <Typography color="secondary">{x.name}</Typography>
          ) : (
            <Link color="inherit" href={x.link}>
              {x.name}
            </Link>
          )
        )}
      </Breadcrumbs>
    </div>
  )
}

export default CustomSeparator
