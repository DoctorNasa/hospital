import React from "react"
import Button from "@material-ui/core/Button"

const BtnBlue = ({ text, fullWidth, marginTop, icon, size = "large" }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      size={size}
      style={{
        color: "white",
        marginTop
      }}
      fullWidth={fullWidth === true}
    >
      {icon && <img style={{ height: 20, paddingRight: 10 }} src={icon} />}
      {text}
    </Button>
  )
}

export default BtnBlue
