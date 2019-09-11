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
const BlockBooking = ({ _fillBooking, _fillCustomer, state, _success }) => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1)

  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1)

  return (
    <Grid item sm={8}>
      <div style={styles.container}>
        <div style={{ padding: 50 }}>
          <Steps
            handleNext={handleNext}
            activeStep={activeStep}
            handleBack={handleBack}
          />
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
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </Grid>
  )
}

export default BlockBooking
