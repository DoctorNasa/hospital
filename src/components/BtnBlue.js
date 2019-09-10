import React from "react"
import Button from "@material-ui/core/Button"

const BtnBlue = ({ text, fullWidth, marginTop }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      size="large"
      style={{
        color: "white",
        marginTop
      }}
      fullWidth={fullWidth === true}
    >
      {text}
    </Button>
  )
}

export default BtnBlue
