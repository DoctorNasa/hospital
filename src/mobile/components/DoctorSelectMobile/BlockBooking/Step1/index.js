import React, { useState } from "react"
import BtnBlue from "../../../BtnBlue"
import Radios from "./Radios"
import ZInputText from "../../../ZInputText"
import Capchta from "../../../Capchta"
import ZDaypicker from "../../../ZDaypicker"
import TitleBlueIcon from "../TitleBlueIcon"

const styles = {
  section: {
    flex: 1,
    padding: 10
  }
}
const Step1 = ({
  handleBack,
  stateRedux,
  _actionRedux,
  _success,
  noBackBtn
}) => {
  const {
    gender,
    firstName,
    lastName,
    country,
    city,
    birthday,
    tel,
    idCard,
    email,
    patientIdOptional,
    detailsOptional
  } = stateRedux.form

  return (
    <div>
      <TitleBlueIcon
        text="รายละเอียดการนัดหมาย"
        img="/images/icons/people-edit.png"
      />
      <Radios
        value={gender}
        _onChange={payload => _actionRedux("gender", payload)}
      />
      <ZInputText
        value={firstName}
        _onChange={payload => _actionRedux("firstName", payload)}
        label="first name"
      />
      <ZInputText
        value={country}
        _onChange={payload => _actionRedux("country", payload)}
        label="country"
      />
      <ZInputText
        value={city}
        _onChange={payload => _actionRedux("city", payload)}
        label="city"
      />
      <ZDaypicker />
      <ZInputText
        value={tel}
        _onChange={payload => _actionRedux("tel", payload)}
        label="mobile"
        type="number"
      />
      <ZInputText
        value={idCard}
        _onChange={payload => _actionRedux("idCard", payload)}
        label="id card"
        type="number"
      />
      <ZInputText
        value={email}
        _onChange={payload => _actionRedux("email", payload)}
        label="email"
        type-="email"
      />
      <ZInputText
        value={patientIdOptional}
        _onChange={payload => _actionRedux("patientIdOptional", payload)}
        label="patient id (optional)"
        type="number"
      />
      <ZInputText
        value={detailsOptional}
        _onChange={payload => _actionRedux("detailsOptional", payload)}
        label="details (optional)"
        multiline
        rows={5}
      />
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
        {!noBackBtn && (
          <div onClick={handleBack} style={{ marginRight: 10 }}>
            <BtnBlue text="back" />
          </div>
        )}

        <div onClick={_success}>
          <BtnBlue text="ต่อไป" />
        </div>
      </div>
    </div>
  )
}

export default Step1
//TODO SEND TO REDUCER _fillCustomer (make form data available before)
