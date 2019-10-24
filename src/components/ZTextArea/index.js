import React from "react"

const ZTextArea = ({
  text = "text area here",
  onChange = e => console.log(e.target.value),
  width = "100%",
  rows = "4",
  cols = "50"
}) => {
  return (
    <textarea
      onChange={onChange}
      style={{
        width,
        border: "2px solid #ebebeb",
        padding: 10,
        borderRadius: 10,
        outline: "none",
        fontSize: 15
      }}
      rows={rows}
      cols={cols}
    >
      {text}
    </textarea>
  )
}

export default ZTextArea
