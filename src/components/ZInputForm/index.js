import React from "react"

const styles = {
  container: {
    border: "2px solid #ebebeb",
    padding: 10,
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
    outline: "none",
    fontSize: 15,
    width: "calc(100% - 34px)",
    marginTop: 1,
    marginBottom: 1
  }
}

const InputForm = ({ value, _onChange, placeholder }) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      style={styles.container}
      onChange={_onChange}
    />
  )
}

export default InputForm
