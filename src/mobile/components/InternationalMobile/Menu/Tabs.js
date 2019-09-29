import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Pop from "./Pop"
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "white"
  },
  bar: {
    backgroundColor: "white",
    boxShadow: " 0px 5px 6px 1px rgba(168,168,168,0.10)"
  },
  outerActive: {
    padding: "0px 21px 0px 0px",
    height: "100%"
  },
  tabActive: {
    background: "#32bfc6",
    color: "white",
    fontWeight: 600,
    padding: "5px 10px 5px 10px",
    borderRadius: 15,
    width: "100%",
    height: "100%"
  },
  paperPosition: {
    position: "absolute",
    zIndex: 99,
    height: "100%"
  }
}))

const ScrollableTabsButtonAuto = ({ queries }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.bar}>
        <Tabs
          value={
            queries.marketing || queries.relationcenter || queries.medicalcenter
              ? 0
              : queries.corporatepartners || queries.corporaterepresentative
              ? 1
              : (queries.insurances || queries.insuranceguidance) && 2
          }
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          TabIndicatorProps={{ style: { backgroundColor: "white" } }}
        >
          {new Array(
            {
              title: "INTERNATION SERVICE",
              id: 1,
              subMenu: [
                {
                  title: "International Marketing",
                  link: "/international?marketing=true"
                },
                {
                  title: "International Relation Center",
                  link: "/international?relationcenter=true"
                },
                {
                  title: "International Medical Center",
                  link: "/international?medicalcenter=true"
                }
              ]
            },
            {
              title: "OUR CORPORATE PARTNERS",
              id: 2,
              subMenu: [
                {
                  title: "Corporate Partners",
                  link: "/international?corporatepartners=true"
                },
                {
                  title: "Corporate Representative",
                  link: "/international?corporaterepresentative=true"
                }
              ]
            },
            {
              title: "HEALTH INSURANCE",
              id: 3,
              subMenu: [
                {
                  title: "Insurance List",
                  link: "/international?insurances=true"
                },
                {
                  title: "Insurance Guidance",
                  link: "/international?insuranceguidance=true"
                }
              ]
            }
          ).map(({ title, id, subMenu }) => {
            return (
              <Tab
                key={id}
                label={
                  <Pop
                    subMenu={subMenu}
                    title={title}
                    isActive={
                      (queries.marketing ||
                        queries.relationcenter ||
                        queries.medicalcenter) &&
                      id === 1
                        ? true
                        : (queries.corporatepartners ||
                            queries.corporaterepresentative) &&
                          id === 2
                        ? true
                        : (queries.insurances || queries.insuranceguidance) &&
                          id === 3 &&
                          true
                    }
                  />
                }
              />
            )
          })}
        </Tabs>
      </AppBar>
    </div>
  )
}

export default ScrollableTabsButtonAuto
