import React from "react"
import Button from "@material-ui/core/Button"

const styles = {
  color: "white",
  fontSize: 20,
  marginTop: 15,
  marginBottom: 15
}

const BtnBlue = ({ text }) => {
  return (
    <Button variant="contained" color="secondary" size="large" style={styles}>
      {text}
    </Button>
  )
}

export default BtnBlue
