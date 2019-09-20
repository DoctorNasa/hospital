import React from "react"
import Button from "@material-ui/core/Button"

const styles = {
  btnFull: {
    color: "white",
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 50,
    paddingRight: 50
  },
  btnOutlined: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 30,
    paddingRight: 30
  }
}

const BtnBlue = ({
  text,
  width,
  textAlign,
  marginTop,
  paddingBottom,
  icon,
  outlined
}) => {
  return (
    <div style={{ width, textAlign, marginTop, paddingBottom }}>
      <Button
        variant={outlined ? "outlined" : "contained"}
        color="secondary"
        size="large"
        style={outlined ? styles.btnOutlined : styles.btnFull}
      >
        {icon && <img style={{ height: 20, paddingRight: 10 }} src={icon} />}
        {text}
      </Button>
    </div>
  )
}

export default BtnBlue
