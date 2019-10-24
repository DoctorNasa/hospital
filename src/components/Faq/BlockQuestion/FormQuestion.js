import React from "react"
import ZInputForm from "../../ZInputForm"
import ZTextArea from "../../ZTextArea"
import ZDropDownForm from "../../ZDropDownForm"
import BtnBlue from "../../BtnBlue"

const blockLeft = " 7px 5px 7px 0px"
const blockRight = " 7px 0px 7px 5px"

const FormQuestion = ({ _success }) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <ZDropDownForm
          placeholder="สอบถามข้อมูล"
          margin={blockLeft}
          width="100%"
          border="2px solid rgb(235, 235, 235)"
        />
        <ZDropDownForm
          placeholder="ข้อมูลการติดต่อ"
          margin={blockRight}
          width="100%"
          border="2px solid rgb(235, 235, 235)"
        />
      </div>
      <div style={{ display: "flex" }}>
        <ZInputForm
          value=""
          placeholder="
          *ชื่อ"
          margin={blockLeft}
        />
        <ZInputForm
          value=""
          placeholder="
          *นามสกุล"
          margin={blockRight}
        />
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flex: 1, marginRight: 5 }}>
          {" "}
          <ZInputForm
            value=""
            placeholder="
            *วัน/เดือน/ปี"
            margin={"7px 2px 7px 0px"}
          />
          <ZInputForm
            value=""
            placeholder="*เบอร์โทรศัพท์"
            margin={"7px 0px 7px 2px"}
          />
        </div>
        <div style={{ flex: 1 }}>
          {" "}
          <ZInputForm value="" placeholder="*อีเมล" margin={blockRight} />
        </div>
      </div>
      <div style={{ flex: 1, width: "calc(100% - 20px)" }}>
        <ZTextArea />
      </div>
      <div
        style={{ textAlign: "center", marginTop: 30, marginBottom: 30 }}
        onClick={_success}
      >
        <BtnBlue text="ตกลง" />
      </div>
    </div>
  )
}

export default FormQuestion
