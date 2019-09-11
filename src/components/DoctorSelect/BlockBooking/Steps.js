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

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center"
  },
  active: {
    color: "#784af4"
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor"
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18
  }
})

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles()
  const { active, completed } = props

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  )
}

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
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}))

function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"]
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Select campaign settings..."
    case 1:
      return "What is an ad group anyways?"
    case 2:
      return "This is the bit I really care about!"
    default:
      return "Unknown step"
  }
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
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon} />
          </Step>
        ))}
      </Stepper>
    </div>
  )
}
