import React from "react"
import Button from "@material-ui/core/Button"

const styles = {
  color: "white",
  fontSize: 20,
  marginTop: 15,
  marginBottom: 15
}

const BtnBlue = ({
  text,
  width,
  textAlign,
  marginTop,
  paddingBottom,
  icon
}) => {
  return (
    <div style={{ width, textAlign, marginTop, paddingBottom }}>
      <Button variant="contained" color="secondary" size="large" style={styles}>
        {icon && <img style={{ height: 20, paddingRight: 10 }} src={icon} />}
        {text}
      </Button>
    </div>
  )
}

export default BtnBlue
