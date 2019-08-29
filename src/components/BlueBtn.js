import React from "react"
import Button from "@material-ui/core/Button"

const BlueBtn = ({ text, fullWidth }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      size="large"
      style={{
        color: "white",
        fontSize: 20,
        marginTop: 15
      }}
      fullWidth={fullWidth === true}
    >
      {text}
    </Button>
  )
}

export default BlueBtn
