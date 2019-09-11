import React from "react"
import ReCAPTCHA from "react-google-recaptcha"

function onChange(value) {
  console.log("Captcha value:", value)
}

const Capchta = () => {
  return (
    <ReCAPTCHA
      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
      onChange={onChange}
    />
  )
}

export default Capchta
