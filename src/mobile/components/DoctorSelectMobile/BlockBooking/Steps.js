import React from "react"
import PropTypes from "prop-types"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import Check from "@material-ui/icons/Check"
import DateRangeIcon from "@material-ui/icons/DateRange"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline"
import StepConnector from "@material-ui/core/StepConnector"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    "& $line": {
      backgroundColor: "#30bfc5"
    }
  },
  completed: {
    "& $line": {
      backgroundColor: "#30bfc5"
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1
  }
})(StepConnector)

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  active: {
    backgroundImage: "linear-gradient( 136deg, white 0%, #30bfc5 50%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  },
  completed: {
    backgroundImage: "linear-gradient( 136deg, white 0%, #30bfc5 40%)"
  }
})

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles()
  const { active, completed } = props

  const icons = {
    1: <DateRangeIcon />,
    2: <AccountCircleIcon />,
    3: <CheckCircleOutlineIcon />
  }

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  )
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  stepsContainer: {
    padding: 0
  },
  stepItem: {
    padding: 0
  }
}))

function getSteps() {
  return ["step 1", "step 2", "step 3"]
}

export default function CustomizedSteppers({
  handleNext,
  handleBack,
  activeStep
}) {
  const classes = useStyles()
  const steps = getSteps()

  return (
    <div className={classes.root}>
      <Stepper
        className={classes.stepsContainer}
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map(label => (
          <Step key={label} className={classes.stepItem}>
            <StepLabel StepIconComponent={ColorlibStepIcon} />
          </Step>
        ))}
      </Stepper>
    </div>
  )
}
