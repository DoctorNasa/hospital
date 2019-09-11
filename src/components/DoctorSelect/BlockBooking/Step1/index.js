import React, { useState } from "react"
import BtnBlue from "../../../BtnBlue"
import Radios from "./Radios"
import ZInputForm from "../../../ZInputForm"
import Capchta from "../../../Capchta"

const styles = {
  section: {
    flex: 1,
    padding: 10
  }
}
const Step1 = ({
  handleNext,
  handleBack,
  activeStep,
  _fillCustomer,
  state,
  _success
}) => {
  const [inputValue, setInputValue] = useState("")

  const _onChangeInput = e => setInputValue(e.target.value)

  return (
    <div>
      <Radios />
      <div style={{ display: "flex", marginBottom: 20, marginTop: 20 }}>
        <div style={{ flex: 1, marginRight: 5 }}>
          <ZInputForm
            value={inputValue}
            _onChange={_onChangeInput}
            placeholder="placeholder"
          />
        </div>
        <div style={{ flex: 1, marginLeft: 5 }}>
          <ZInputForm
            value={inputValue}
            _onChange={_onChangeInput}
            placeholder="placeholder"
          />
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: 20, marginTop: 20 }}>
        <div style={{ flex: 1, marginRight: 5 }}>
          <ZInputForm
            value={inputValue}
            _onChange={_onChangeInput}
            placeholder="placeholder"
          />
        </div>
        <div style={{ flex: 1, marginLeft: 5 }}>
          <ZInputForm
            value={inputValue}
            _onChange={_onChangeInput}
            placeholder="placeholder"
          />
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: 20, marginTop: 20 }}>
        <div style={{ flex: 1, display: "flex", marginRight: 5 }}>
          <div style={{ flex: 1 }}>
            <ZInputForm
              value={inputValue}
              _onChange={_onChangeInput}
              placeholder="placeholder"
            />
          </div>
          <div style={{ flex: 1, marginLeft: 5 }}>
            <ZInputForm
              value={inputValue}
              _onChange={_onChangeInput}
              placeholder="placeholder"
            />
          </div>
        </div>
        <div style={{ flex: 1, marginLeft: 5 }}>
          <ZInputForm
            value={inputValue}
            _onChange={_onChangeInput}
            placeholder="placeholder"
          />
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: 20, marginTop: 20 }}>
        <div style={{ flex: 1, marginRight: 5 }}>
          <ZInputForm
            value={inputValue}
            _onChange={_onChangeInput}
            placeholder="placeholder"
          />
        </div>
        <div style={{ flex: 1, marginLeft: 5 }}>
          <ZInputForm
            value={inputValue}
            _onChange={_onChangeInput}
            placeholder="placeholder"
          />
        </div>
      </div>
      <textarea
        style={{
          width: "100%",
          border: "2px solid #ebebeb",
          padding: 10,
          borderRadius: 10,
          outline: "none",
          fontSize: 15
        }}
        rows="4"
        cols="50"
      >
        text area here
      </textarea>
      <div style={{ color: "#bfbfbf", marginTop: 30, marginBottom: 30 }}>
        ras eget feugiat risus. Sed porta justo et tellus fermentum, in viverra
        odio pulvinar. Cras vitae bibendum tellus, eget ultrices erat. Vivamus
        nec dictum orci, ac vestibulum magna. Etiam varius lacinia viverra.
        Proin sit amet odio sit amet sapien aliquam lobortis eu ut sem.
        Curabitur vehicula nulla non efficitur aliquam. Mauris eget mauris
        dictum, ornare risus nec, feugiat eros. Nunc nisl nisi, molestie ut
        consectetur ut, interdum et mauris. Sed at libero magna. Sed quis
        interdum libero. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nullam vitae turpis tempus, vestibulum eros id, scelerisque lorem.
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Capchta />
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: 30,
          marginBottom: 30,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div onClick={handleBack} style={{ marginRight: 20 }}>
          <BtnBlue text="back" />
        </div>
        <div onClick={_success}>
          <BtnBlue text="ต่อไป" />
        </div>
      </div>
    </div>
  )
}

export default Step1
//TODO SEND TO REDUCER _fillCustomer (make form data available before)
