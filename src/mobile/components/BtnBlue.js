import React from "react"
import Button from "@material-ui/core/Button"

const styles = {
  color: "white",
  fontSize: 20,
  marginTop: 15,
  marginBottom: 15
}

const BtnBlue = ({ text, width, textAlign, marginTop, paddingBottom }) => {
  return (
    <div style={{ width, textAlign, marginTop, paddingBottom }}>
      <Button variant="contained" color="secondary" size="large" style={styles}>
        {text}
      </Button>
    </div>
  )
}

export default BtnBlue
