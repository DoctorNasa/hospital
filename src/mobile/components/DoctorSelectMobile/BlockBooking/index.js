import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Steps from "./Steps"
import Step0 from "./Step0"
import Step1 from "./Step1"

const styles = {
  container: {
    background: "white",
    width: "100%",
    marginBottom: 30
  },
  section: {
    flex: 1,
    padding: 10
  }
}
const BlockBooking = ({
  _fillBooking,
  _fillCustomer,
  state,
  _success,
  stateRedux,
  _actionRedux
}) => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1)

  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1)

  return (
    <div style={styles.container}>
      <div style={{ padding: "30px 15px 15px 15px" }}>
        <div style={{ padding: "0px 0px 15px 0px" }}>
          <Steps
            handleNext={handleNext}
            activeStep={activeStep}
            handleBack={handleBack}
          />
        </div>

        {activeStep === 0 ? (
          <Step0
            handleNext={handleNext}
            activeStep={activeStep}
            handleBack={handleBack}
            _fillBooking={_fillBooking}
            state={state}
          />
        ) : activeStep === 1 ? (
          <Step1
            handleNext={handleNext}
            activeStep={activeStep}
            handleBack={handleBack}
            _fillCustomer={_fillCustomer}
            state={state}
            _success={_success}
            stateRedux={stateRedux}
            _actionRedux={_actionRedux}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default BlockBooking
