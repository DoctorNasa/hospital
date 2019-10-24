import React from "react"

const container = margin => ({
  border: "2px solid #ebebeb",
  padding: 10,
  borderRadius: 20,
  paddingLeft: 15,
  paddingRight: 15,
  outline: "none",
  fontSize: 15,
  width: "calc(100% - 34px)",
  margin
})

const InputForm = ({
  value,
  _onChange,
  placeholder,
  margin = "1px 0px 1px 0px"
}) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      style={container(margin)}
      onChange={_onChange}
    />
  )
}

export default InputForm
